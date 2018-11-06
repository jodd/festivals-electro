/* ==========================================================================
   Performers
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'

import express from 'express'
import FB from '../modules/fb'

const router = express.Router()

router.post('/', (req, res) => {

  let { performer } = req.body
  const performer_fb_id = performer.toString()

  FB.fetch(performer_fb_id + '?fields=name,genre,link,cover,picture.type(large),events.limit(100)')
  .then(fb_res => {
    if (fb_res.error) {
      return res.status(500).send(fb_res.error.message)
    }

    let data = fs.readFileSync(resolvePath(__dirname, '../db/data.json'), 'utf8')
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

    fs.writeFileSync(resolvePath(__dirname, '../db/data.json'),
      JSON.stringify(data, null, 2))

    res.send(data)
  })

})

router.post('/:id', (req, res) => {

  let data = fs.readFileSync(resolvePath(__dirname, '../db/data.json'), 'utf8')
  const { events, performers } = JSON.parse(data)
  const performer = performers.find(p => p.id === req.params.id)
  const links = req.body.links
  const picture = req.body.picture

  if (links && Object.keys(links).length) {
    Object.assign(performer.links, links)
  }

  if (picture && Object.keys(picture).length) {
    Object.assign(performer.picture, picture)
  }

  data = {
    events: events,
    performers: performers
  }

  fs.writeFileSync(resolvePath(__dirname, '../db/data.json'),
    JSON.stringify(data, null, 2))

  res.send(Object.assign({
    item: performer
  }, data))

})

export default router
