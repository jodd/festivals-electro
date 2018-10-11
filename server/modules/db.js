/* ==========================================================================
   Database module
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'


function upcoming(event) {
  return new Date(event.end_time) >= new Date()
}

function past(event) {
  return new Date(event.end_time) < new Date()
}


const DB = {

  get: (table) => new Promise(resolve => {
    fs.readFile(resolvePath(__dirname, '../db/data.json'), 'utf8', (err, data) => {
      if (err) throw err
      resolve(JSON.parse(data)[table])
    })
  }),

  getData: () => new Promise(resolve => {
    fs.readFile(resolvePath(__dirname, '../db/data.json'), 'utf8', (err, data) => {
      if (err) throw err
      resolve(JSON.parse(data))
    })
  }),

  getUser: (username) => new Promise(resolve => {
    fs.readFile(resolvePath(__dirname, '../db/users.json'), 'utf8', (err, data) => {
      if (err) throw err
      resolve({
        username: username,
        password: JSON.parse(data)[username].password
      })
    })
  })

}

export default {

  search: () => DB.getData(),

  events: () => DB.get('events').then(data => ({ events: data })),

  upcomingEvents: () => {
    return DB.get('events').then(data => ({
      events: data.filter(upcoming)
    }))
  },

  pastEvents: () => {
    return DB.get('events').then(data => ({
      events: data.filter(past)
    }))
  },

  event: (params) => {
    return DB.getData().then(data => {

      const event = Object.assign({},
        data.events.find(e => e.id === params.id))

      if (!Object.keys(event).length) {
        return { status: 404 }
      }

      event.lineup = event.lineup.map(id =>
        data.performers.find(p => p.id === id))

      return { event: event }
    })
  },

  performers: () => {
    return DB.get('performers').then(data => ({
      performers: data
    }))
  },

  performer: (params) => {
    return DB.getData().then(data => {

      const performer = Object.assign({},
        data.performers.find(p => p.id === params.id))

      if (!Object.keys(performer).length) {
        return { status: 404 }
      }

      performer.events = performer.events.map(id =>
        data.events.find(e => e.id === id))

      return { performer: performer }
    })
  }
}
