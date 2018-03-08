/* ==========================================================================
   Server
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'
import express from 'express'
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { routes } from '../client/routes'
import template from './template'
import FB from './fb'

/* server config
   -------------------------------------------------------------------------- */

const app = express()
const ENV = process.env.NODE_ENV || 'production'
const PORT = process.env.PORT || 8080

if (ENV === 'development') {

    const config = require('../../webpack.dev')
    const compiler = webpack(config)

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      hot: true,
      publicPath: config.output.publicPath,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }))

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log,
      reload: true
    }))
} else if (ENV === 'production') {
  app.use('/assets', express.static(resolvePath(__dirname, '../../dist')))
}

app.use('/assets', express.static(resolvePath(__dirname, '../../static')))
app.use(express.json())
app.use(express.urlencoded())

/* handle requests
   -------------------------------------------------------------------------- */

app.get('*', (req, res) => {

  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ match }) => loadData(match))

  Promise.all(promises).then(values => {

    values = values.reduce((acc, value) => Object.assign(acc, value))

    const { context, meta, data } = Object.assign({
      context: { status: 200 },
      meta: {
        title: 'Festik',
        url: req.protocol + '://' + req.hostname + req.originalUrl,
        image: req.protocol + '://' + req.hostname + '/static/logo.svg'
      }
    }, values)

    // handle async json requests
    if (req.headers.accept === 'application/json') {
      return res.status(context.status).json({
        meta: meta,
        data: data
      })
    }

    const html = renderToString(
      <StaticRouter location={context.status === 404 ? '/error' : req.url}
        context={context}>
        {renderRoutes(routes, data)}
      </StaticRouter>)

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      context.status = 307
      return res.redirect(context.status, context.url)
    }

    res.status(context.status)

    res.write(template({
      status: context.status,
      meta: meta,
      body: html,
      data: JSON.stringify(data)
    }))

    res.end()

  }).catch(err => {
    console.log(err)
  })
})

app.post('/events', (req, res) => {

  let { event } = req.body
  const event_fb_id = event.toString()

  FB.fetch(event_fb_id + '?fields=name,place,start_time,end_time,cover')
  .then(response => {
    if (response.error) {
      return res.status(response.error.code).send(response.error.message)
    }

    let data = fs.readFileSync(resolvePath(__dirname, 'data.json'), 'utf8')
    const { events, performers } = JSON.parse(data)

    if (event = events.find(e => e.facebook_id === event_fb_id)) {
      Object.assign(event, response, {
        id: event.id,
        facebook_id: event_fb_id
      })
    } else {
      events.push(Object.assign(response, {
        id: events.length ?
          (parseInt(events[events.length - 1].id) + 1).toString() :
          "0",
        facebook_id: event_fb_id,
        lineup: [],
        links: {}
      }))
    }

    data = {
      events: events,
      performers: performers
    }
    fs.writeFileSync(resolvePath(__dirname, 'data.json'), JSON.stringify(data, null, 2))
    res.send(data)
  })
})

app.post('/performers', (req, res) => {
  let { performer } = req.body
  const performer_fb_id = performer.toString()

  FB.fetch(performer_fb_id + '?fields=name,genre,link,cover,picture.type(large),events.limit(100)')
  .then(fb_res => {
    if (fb_res.error) {
      return res.status(fb_res.error.code).send(fb_res.error.message)
    }

    let data = fs.readFileSync(resolvePath(__dirname, 'data.json'), 'utf8')
    const { events, performers } = JSON.parse(data)

    // check if the performer is already stored
    performer = performers.find(p => p.facebook_id === performer_fb_id)

    const performer_id = performer ? performer.id : performers.length ?
      (parseInt(performers[performers.length - 1].id) + 1).toString() :
      "0"

    // check if any of the performer events matches against any of ours
    let performerEvents = []
    if (fb_res.events && fb_res.events.data && fb_res.events.data.length) {
      fb_res.events.data.forEach(event => {
        if (event = events.find(e => e.facebook_id === event.id)) {
          performerEvents.push(event.id)
          !event.lineup.includes(performer_id) && event.lineup.push(performer_id)
        }
      })
    }

    // update existing performer or create new entry
    if (performer) {
      Object.assign(performer, {
        picture: fb_res.picture,
        cover: fb_res.cover,
        events: performerEvents
      })
    } else {
      performers.push({
        id: performer_id,
        name: fb_res.name,
        facebook_id: performer_fb_id,
        picture: fb_res.picture,
        cover: fb_res.cover,
        events: performerEvents,
        links: {
          fb: fb_res.link
        },
        genre: fb_res.genre
      })
    }

    data = {
      events: events,
      performers: performers
    }
    fs.writeFileSync(resolvePath(__dirname, 'data.json'), JSON.stringify(data, null, 2))
    res.send(data)
  })
})

app.post('/events/:id', (req, res) => {
  let data = fs.readFileSync(resolvePath(__dirname, 'data.json'), 'utf8')
  const { events, performers } = JSON.parse(data)
  const event = events.find(e => e.id === req.params.id)
  const performer = req.body.performer ? performers.find(p =>
    p.name.toLowerCase() === req.body.performer.toLowerCase()) : null
  const links = req.body.links

  if (links && Object.keys(links).length) {
    Object.assign(event.links, req.body.links)
  }

  if (performer) {

    if (event.lineup.find(id => id === performer.id)) {
      return res.send(`Performer ${performer.name} already stored`)
    }

    event.lineup.push(performer.id)
    performer.events.push(event.id)
  }

  data = {
    events: events,
    performers: performers
  }

  fs.writeFileSync(resolvePath(__dirname, 'data.json'), JSON.stringify(data, null, 2))
  res.send(Object.assign({
    item: event
  }, data))
})

app.post('/performers/:id', (req, res) => {
  let data = fs.readFileSync(resolvePath(__dirname, 'data.json'), 'utf8')
  const { events, performers } = JSON.parse(data)
  const performer = performers.find(p => p.id === req.params.id)
  const links = req.body.links

  if (links && Object.keys(links).length) {
    Object.assign(performer.links, req.body.links)
  }

  data = {
    events: events,
    performers: performers
  }

  fs.writeFileSync(resolvePath(__dirname, 'data.json'), JSON.stringify(data, null, 2))
  res.send(Object.assign({
    item: performer
  }, data))
})

/* start server
   -------------------------------------------------------------------------- */
app.listen(PORT, '0.0.0.0', err => {
  if (err) {
    return console.error(err)
  }
  return console.info(`Server running on http://localhost:${PORT} [${ENV}]`)
})

/* -------------------------------------------------------------------------- */
/* mock the API (to be removed)
   -------------------------------------------------------------------------- */

function filterNext(events) {
  return events.filter(e => new Date(e.end_time) >= new Date())
}

function filterPast(events) {
  return events.filter(e => new Date(e.end_time) < new Date())
}

function loadData(match) {

  const params = {}

  Object.keys(match.params).forEach(key =>
    params[key] = match.params[key].split('?')[0])

  const data = fs.readFileSync(resolvePath(__dirname, 'data.json'), 'utf8')
  const { events, performers } = JSON.parse(data)

  const dispatcher = {

    "/": () => match.isExact ? new Promise((resolve, reject) => {
      resolve({
        meta: { title: "Prochains événements" },
        data: { events: filterNext(events) }
      })
    }) : {
      // status: 404,
      meta: { title: "Festik - Erreur : page non trouvée :(" }
    },

    "/events": () => new Promise((resolve, reject) => {

      resolve({
        meta: { title: "Prochains événements" },
        data: {
          events: filterNext(events)
        }
      })
    }),

    "/events/past": () => new Promise((resolve, reject) => {

      resolve({
        meta: { title: "Evénements passés" },
        data: {
          events: filterPast(events)
        }
      })
    }),

    "/search": () => new Promise((resolve, reject) => {
      resolve({
        meta: { title: "Recherche" },
        data: {
          events: events,
          performers: performers
        }
      })
    }),

    "/events/:id": () => new Promise((resolve, reject) => {

      const event = Object.assign({},
        events.find(e => e.id === params.id))

      if (!Object.keys(event).length) {
        resolve({
          status: 404,
          meta: { title: "Festik - Erreur : page non trouvée :(" }
        })
      }

      event.lineup = event.lineup.map(id =>
        performers.find(p => p.id === id))

      resolve({
        meta: { title: event.name },
        data: { event: event }
      })
    }),

    "/performers": () => new Promise((resolve, reject) => {
      resolve({
        meta: { title: "Tous les artistes" },
        data: { performers: performers }
      })
    }),

    "/performers/:id": () => new Promise((resolve, reject) => {
      const performer = Object.assign({},
        performers.find(p => p.id === params.id))

      if (!Object.keys(performer).length) {
        resolve({
          status: 404,
          meta: { title: "Festik - Erreur : page non trouvée :(" }
        })
      }

      performer.events = performer.events.map(id =>
        events.find(e => e.id === id))

      resolve({
        meta: { title: performer.name },
        data: { performer: performer }
      })
    }),

    "/map": () => new Promise((resolve, reject) => {
      resolve({
        meta: { title: 'Carte des festivals' },
        data: {
          events: events
        }
      })
    }),

    "/admin": () => new Promise((resolve, reject) => {
      resolve({
        meta: { title: 'Festik admin' },
        data: {
          events: events,
          performers: performers
        }
      })
    })
  }

  return dispatcher[match.path]()
}
