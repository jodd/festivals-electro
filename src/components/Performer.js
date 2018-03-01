/* ==========================================================================
   Performer
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { DateSticker } from '../utils'

if (process.env.WEBPACK) {
  require( '../css/Performer.css' )
}

/* Sub Components
   -------------------------------------------------------------------------- */
function EventCard({event}) {
  const { id, name, start_time, place } = event
  return (
    <li className="Performer-event">
      <DateSticker datetime={start_time} />
      <div className="Performer-event-content">
        <Link to={'/events/' + id} className="Performer-event-title">
          {name}
        </Link>
        <div className="Performer-event-place">
          <svg className="icon-location" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
            <path d="M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"/>
          </svg>
          {(place.location && place.location.city && place.location.country) ?
            <span>{place.location.city + ', ' + place.location.country}</span> :
            <span>{place.name}</span>
          }
        </div>
      </div>
    </li>
  )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default ({performer}) => {

  const {name, picture, cover, links, events} = performer

  const pastEvents = events.filter(e => new Date(e.end_time) < new Date())
  const nextEvents = events.filter(e => new Date(e.end_time) >= new Date())

  // sort upcoming events by date ascending
  nextEvents.sort((a, b) => new Date(a.start_time) - new Date(b.start_time))

  // sort past events by date descending
  pastEvents.sort((a, b) => new Date(b.start_time) - new Date(a.start_time))

  return (
    <div className="Performer">
      {cover && <img src={cover.source} alt=""/>}
      <h1>
        <img src={picture.data.url} alt={"Photo de profil de " + name} />
        {name}
      </h1>
      <div className="Performer-content">
        <div className="Performer-links">
          <span>Ailleurs sur le web&nbsp;:</span>
          <ul>
            {links.ws &&
              <li>
                <a href={links.ws} title={"Site internet de " + name}>
                  <svg className="icon-earth" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
                    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 480.001c-31.479 0-61.436-6.506-88.615-18.226L283.959 330.63A16.002 16.002 0 0 0 288 320v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.07-4.687-11.313-4.687H80c-8.836 0-16 7.164-16 16v96a15.999 15.999 0 0 0 8.845 14.311L128 345.889v93.943C69.974 399.354 32 332.116 32 256c0-34.357 7.745-66.903 21.569-96H112c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.07 4.686-11.314V41.294C212.281 35.257 233.759 32 256 32c35.203 0 68.502 8.13 98.141 22.6a97.187 97.187 0 0 0-6.023 5.518C329.985 78.25 320 102.357 320 128s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-.04 4.759-.118 6.907 25.901 19.376 93.328-4.202 186.167a15.957 15.957 0 0 0-.421 2.612c-40.662 41.54-97.35 67.328-160.071 67.328z"/>
                  </svg>
                  Site web
                </a>
              </li>}
            {links.fb &&
              <li>
                <a href={links.fb} title={"Page Facebook de " + name}>
                  <svg className="icon-facebook" viewBox="0 0 32 32" height="32" width="32" aria-hidden="true">
                    <path d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" fill="#3B5998"/>
                    <path d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z" fill="#FFF"/>
                  </svg>
                  Profil Facebook
                </a>
              </li>}
            {links.ra &&
              <li>
                <a href={links.ra} title={"Page Resident Advisor de " + name}>
                  <img className="icon-ra" src="/assets/ra.png" alt="" />
                  Resident Advisor
                </a>
              </li>}
          </ul>
        </div>
      </div>
      {nextEvents.length > 0 &&
        <div className="Performer-events">
          <h2>Prochains événements</h2>
          <ul>
            {nextEvents.map(e => <EventCard key={e.id} event={e} />)}
          </ul>
        </div>}
        {pastEvents.length > 0 &&
          <div className="Performer-events pastEvents">
            <h2>Evénements passés</h2>
            <ul>
              {pastEvents.map(e => <EventCard key={e.id} event={e} />)}
            </ul>
          </div>}
    </div>
  )
}
