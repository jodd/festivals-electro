/* ==========================================================================
   Events
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'

import express from 'express'
import FB from '../modules/fb'

const router = express.Router()

router.post('/', (req, res) => {

  let { event } = req.body
  const event_fb_id = event.toString()

  FB.fetch(event_fb_id + '?fields=name,place,start_time,end_time,cover')
  .then(fb_res => {

    if (fb_res.error) {
      return res.status(fb_res.error.code).send(fb_res.error.message)
    }

    let data = fs.readFileSync(resolvePath(__dirname, '../db/data.json'), 'utf8')
    const { events, performers } = JSON.parse(data)

    if (event = events.find(e => e.facebook_id === event_fb_id)) {
      Object.assign(event, fb_res, {
        id: event.id,
        facebook_id: event_fb_id
      })
    } else {
      events.push(Object.assign(fb_res, {
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

    fs.writeFileSync(resolvePath(__dirname, '../db/data.json'),
      JSON.stringify(data, null, 2))

    res.send(data)
  })
})

router.post('/:id', (req, res) => {

  let data = fs.readFileSync(resolvePath(__dirname, '../db/data.json'), 'utf8')

  const { events, performers } = JSON.parse(data)
  const event = events.find(e => e.id === req.params.id)
  const performer = req.body.performer ? performers.find(p =>
    p.name.toLowerCase() === req.body.performer.toLowerCase()) : null
  const links = req.body.links
  const cover = req.body.cover

  if (links && Object.keys(links).length) {
    Object.assign(event.links, links)
  }

  if (cover && Object.keys(cover).length) {
    Object.assign(event.cover, cover)
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

  fs.writeFileSync(resolvePath(__dirname, '../db/data.json'),
    JSON.stringify(data, null, 2))

  res.send(Object.assign({ item: event }, data))

})

export default router
