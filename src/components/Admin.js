/* ==========================================================================
   Admin
   ========================================================================== */

import React from 'react'

import Event from './Event'
import Performer from './Performer'

if (process.env.WEBPACK) {
  require( '../css/Admin.css' )
}

function postJSON(url, obj) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())
}

class AddPerformer extends React.Component {

  constructor(props) {
    super()
    this.state = {
      event: props.event
    }
  }

  onSubmit(e) {
    e.preventDefault()
    postJSON('/events/' + this.props.event.id, {
      performer: e.target.elements['performer'].value
    })
    .then(data => this.props.onSubmit(data))
    .catch(error => {})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h3>Line-up</h3>
        <input type="text" name="performer" placeholder="Ajouter un artiste" />
      </form>
    )
  }
}

class Item extends React.Component {

  constructor(props) {
    super()
    this.state = {
      item: props.item
    }
  }

  addEventLink(e) {
    e.preventDefault()
    const form = e.target
    postJSON('/events/' + this.props.item.id, {
      links: {
        ws: form.elements['ws'].value,
        ra: form.elements['ra'].value
      }
    })
    .then(data => {
      this.setState({
        item: data.item
      })
      this.props.onAdd(data)
    })
    .catch(error => {})
  }

  addPerformerLink(e) {
    e.preventDefault()
    postJSON('/performers/' + this.props.item.id, {
      links: {
        ws: this.performerLinkWS.value,
        sc: this.performerLinkSC.value,
        ra: this.performerLinkRA.value
      }
    })
    .then(data => {
      this.setState({
        item: data.item
      })
      this.props.onAdd(data)
    })
    .catch(error => {})
  }

  componentDidUpdate() {
    const { item } = this.props
    if (item.lineup) {
      this.eventLinkWS.value = item.links.ws || ''
      this.eventLinkRA.value = item.links.ra || ''
    } else if (item.events) {
      this.performerLinkWS.value = item.links.ws || ''
      this.performerLinkSC.value = item.links.sc || ''
      this.performerLinkRA.value = item.links.ra || ''
    }
  }

  render() {
    const { item } = this.props
    return (
      <section className="Admin-item">
        {item.start_time ?
          <Event event={item} /> :
          <Performer performer={item} />}
        {item.lineup &&
          <div>
            <h3>Liens</h3>
            <form onSubmit={this.addEventLink.bind(this)}>
              <p><input type="url" name="ws" placeholder="Site web"
                ref={el => this.eventLinkWS = el}
                defaultValue={item.links.ws} /></p>
              <p><input type="url" name="ra" placeholder="Resident Advisor"
                ref={el => this.eventLinkRA = el}
                defaultValue={item.links.ra} /></p>
              <p><input type="submit" className="hidden" /></p>
            </form>
            <AddPerformer event={item}
              onSubmit={this.props.onAdd} />
          </div>}
          {item.events &&
            <div>
              <h3>Liens</h3>
              <form onSubmit={this.addPerformerLink.bind(this)}>
                <p><input type="url" name="ws" placeholder="Site web"
                  ref={el => this.performerLinkWS = el}
                  defaultValue={item.links.ws} /></p>
                <p><input type="url" name="sc" placeholder="Soundcloud"
                  ref={el => this.performerLinkSC = el}
                  defaultValue={item.links.sc} /></p>
                <p><input type="url" name="ra" placeholder="Resident Advisor"
                  ref={el => this.performerLinkRA = el}
                  defaultValue={item.links.ra} /></p>
                <p><input type="submit" className="hidden" /></p>
              </form>
            </div>}
      </section>
    )
  }
}

export default class Admin extends React.Component {

  constructor(props) {
    super()
    this.state = {
      events: props.events,
      performers: props.performers,
      item: null
    }
  }

  showEvent(event, e) {
    e && e.preventDefault()
    if (event.lineup.length && typeof event.lineup[0] === "string") {
      event.lineup = event.lineup.map(id =>
        this.state.performers.find(p => p.id === id))
    }
    this.setState({
      item: event
    })
  }

  showPerformer(performer, e) {
    e && e.preventDefault()
    if (performer.events.length && typeof performer.events[0] === "string") {
      performer.events = performer.events.map(id =>
        this.state.events.find(e => e.id === id))
    }
    this.setState({
      item: performer
    })
  }

  addEvent(e) {
    e.preventDefault()
    const event_fb_id = e.target.elements['event'].value
    postJSON('/events', {
      event: event_fb_id
    })
    .then(data => this.setState({
      item: data.events.find(e => e.facebook_id === event_fb_id),
      events: data.events
    }))
    .catch(error => {
      this.setState({
        error: error,
        item: null
      })
    })
  }

  addPerformer(e) {
    e.preventDefault()
    const performer_fb_id = e.target.elements['performer'].value
    postJSON('/performers', {
      performer: performer_fb_id
    })
    .then(data => this.setState({
      item: data.performers.find(p => p.facebook_id === performer_fb_id),
      performers: data.performers
    }))
    .catch(error => {
      this.setState({
        error: error,
        item: null
      })
    })
  }

  onAdd(data) {
    this.setState({
      events: data.events,
      performers: data.performers
    })
    data.item.lineup && this.showEvent(data.item)
    data.item.events && this.showPerformer(data.item)
  }

  componentDidMount() {
    this.eventList.style.height = this.eventList.parentNode.getBoundingClientRect().bottom
      - this.eventList.getBoundingClientRect().top + 'px'
    this.performerList.style.height = this.performerList.parentNode.getBoundingClientRect().bottom
      - this.performerList.getBoundingClientRect().top + 'px'
  }

  render() {
    const { events, performers, item, error } = this.state

    // sort events and performers in alphabetical order
    events.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      return nameA < nameB ? -1
        : nameA > nameB ? 1
        : 0
    })

    performers.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      return nameA < nameB ? -1
        : nameA > nameB ? 1
        : 0
    })

    return (
      <main role="main" className="Admin">
        <section className="Admin-list">
          <div>
            <h2>Evénements ({events.length})</h2>
            <form onSubmit={this.addEvent.bind(this)}>
              <input type="text" name="event" />
            </form>
            <ul ref={el => this.eventList = el}>
              {events.map(event => (
                <li key={event.id}>
                  <a href={"/events/" + event.id } onClick={this.showEvent.bind(this, event)}>
                    {event.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Artistes ({performers.length})</h2>
            <form onSubmit={this.addPerformer.bind(this)}>
              <input type="text" name="performer" />
            </form>
            <ul ref={el => this.performerList = el}>
              {performers.map(performer => (
                <li key={performer.id}>
                  <a href={"/performers/" + performer.id} onClick={this.showPerformer.bind(this, performer)}>
                    {performer.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {item ? <Item item={item} onAdd={this.onAdd.bind(this)} /> :
          error && <div className="errorMessage">{error.message}</div>}
      </main>
    )
  }
}
