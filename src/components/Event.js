/* ==========================================================================
   Event
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { DateRange } from '../utils'

if (process.env.WEBPACK) {
  require( '../css/Event.css' )
}

/* -------------------------------------------------------------------------- */

/* sub-component: performer */
const Item = ({performer}) => {
  return (
    <li>
      <Link to={'/performers/' + performer.id}>
        <img src={performer.picture.data.url} alt={"Photo de profil de " + performer.name} />
        <span>{performer.name}</span>
      </Link>
    </li>
  )
}

/* export stateless component
   -------------------------------------------------------------------------- */
export default ({event}) => {
  const { name, cover, start_time, end_time, place, lineup, links } = event
  const { location } = place
  let gmapsQuery = null

  if (location) {
    if (location.city && location.country) {
      gmapsQuery = location.street ?
        escape(`${location.street} ${location.city} ${location.country}`) :
        escape(`${place.name} ${location.city} ${location.country}`)
    } else if (location.latitude && location.longitude) {
      gmapsQuery = location.latitude + "," + location.longitude
    }
  } else {
    gmapsQuery = escape(place.name)
  }

  const pastEvent = new Date(end_time) < new Date()

  // sort lineup in alphabetical order
  lineup.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    return nameA < nameB ? -1
      : nameA > nameB ? 1
      : 0
  })

  return (
    <section className="Event">
      {cover &&
        <img src={cover.source} className="Event-picture" alt={"Photo de présentation de l'événement " + name}/>}
      <div className="Event-content">
        <div className="Event-title">
          <h1>{name}</h1>
          {pastEvent && <span className="sticker">Passé</span>}
        </div>
        <div className="Event-meta">
          <div className="Event-date">
            <svg className="icon-calendar" viewBox="0 0 416 448" width="416" height="448" aria-hidden="true">
              <path d="M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z"/>
            </svg>
            <DateRange start_time={start_time} end_time={end_time} />
          </div>
          <div className="Event-place">
            <svg className="icon-location" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
              <path d="M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"/>
            </svg>
            <div>
              {place.name}
              {location && location.city && location.country &&
                <span>{(location.street ? location.street + ', ' : '') + (location.zip ? location.zip + ' ' : '') + location.city + ', ' + location.country}</span>}
            </div>
            {gmapsQuery &&
              <a href={"https://www.google.com/maps/search/?api=1&query=" + gmapsQuery}
                className="Event-place-link">Voir la carte</a>}
          </div>
        </div>
        <div className="Event-links">
          <span>Ailleurs sur le web&nbsp;:</span>
          <ul>
            {links.ws &&
              <li>
                <a href={links.ws} title={"Site internet de l'événement " + name}>
                  <svg className="icon-earth" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
                    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 480.001c-31.479 0-61.436-6.506-88.615-18.226L283.959 330.63A16.002 16.002 0 0 0 288 320v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.07-4.687-11.313-4.687H80c-8.836 0-16 7.164-16 16v96a15.999 15.999 0 0 0 8.845 14.311L128 345.889v93.943C69.974 399.354 32 332.116 32 256c0-34.357 7.745-66.903 21.569-96H112c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.07 4.686-11.314V41.294C212.281 35.257 233.759 32 256 32c35.203 0 68.502 8.13 98.141 22.6a97.187 97.187 0 0 0-6.023 5.518C329.985 78.25 320 102.357 320 128s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-.04 4.759-.118 6.907 25.901 19.376 93.328-4.202 186.167a15.957 15.957 0 0 0-.421 2.612c-40.662 41.54-97.35 67.328-160.071 67.328z"/>
                  </svg>
                  Site web
                </a>
              </li>
            }
            <li>
              <a href={"https://www.facebook.com/events/" + event.facebook_id} title={"Page Facebook de l'événement " + name}>
                <svg className="icon-facebook" viewBox="0 0 32 32" height="32" width="32" aria-hidden="true">
                  <path d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" fill="#3B5998"/>
                  <path d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z" fill="#FFF"/>
                </svg>
                Facebook
              </a>
            </li>
            {links.ra &&
              <li>
                <a href={links.ra} title={"Page Resident Advisor de l'événement " + name}>
                  <img className="icon-ra" src="/assets/ra.png" alt="" />
                  Resident Advisor
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
      {lineup.length > 0 &&
        <div className="Event-lineup">
          <h2>Line-up</h2>
          <ul>
            {lineup.map(performer => <Item key={performer.id} performer={performer} />)}
          </ul>
        </div>}
    </section>
  )
}
