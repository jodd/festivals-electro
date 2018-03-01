/* ==========================================================================
   Events
   ========================================================================== */

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import EventCard from './EventCard'

if (process.env.WEBPACK) {
  require( '../css/Events.css' )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class Events extends React.Component {

  static pageNumber = 0

  constructor({ events, location: { pathname }}) {
    super()
    if (pathname === '/events/past') {
      events.sort((a, b) => new Date(b.start_time) - new Date(a.start_time))
    } else {
      events.sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
    }
    this.state = {
      events: events,
      displayedEvents: events.slice(0, 10 + Events.pageNumber * 5)
    }
  }

  loadMore() {
    const { events, displayedEvents } = this.state
    Events.pageNumber += 1
    this.setState({
      displayedEvents: events.slice(0, 10 + Events.pageNumber * 5)
    })
    if (displayedEvents.length === events.length) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }

  onScroll() {
    if (window.pageYOffset > document.body.clientHeight - 2 * window.innerHeight)
      this.loadMore()
  }

  componentDidMount() {
    if (this.state.displayedEvents.length < this.state.events.length) {
      this.scrollHandler = throttle(this.onScroll.bind(this), 30)
      window.addEventListener('scroll', this.scrollHandler)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  render() {
    const { title } = this.props.route
    const events = this.state.displayedEvents

    return (
      <section className="Events">
        <nav role="navigation">
          <NavLink exact to="/events">Prochains</NavLink>
          <NavLink exact to="/events/past">Passés</NavLink>
        </nav>
        {events.map(item => <EventCard key={item.id} event={item} />)}
      </section>
    )
  }
}
