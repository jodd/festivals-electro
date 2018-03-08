/* ==========================================================================
   Event Card
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { DateSticker, DateRange } from '../utils'

if (process.env.WEBPACK) {
  require( '../css/EventCard.css' )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default ({event}) => {
  const { id, name, cover, place, start_time, end_time } = event
  const pastEvent = new Date(end_time) < new Date()

  return (
    <div className={"EventCard" + (pastEvent ? " pastEvent" : "")}>
      {cover &&
        <Link to={'/events/' + id} className="EventCard-picture">
          <img src={cover.source} alt=""/>
        </Link>}
      <div className="EventCard-content">
        <DateSticker datetime={start_time} />
        <div className="EventCard-title">
          <Link to={'/events/' + id}>{name}</Link>
          {pastEvent && <span className="sticker">Passé</span>}
        </div>
        <div className="EventCard-meta">
          {/* <div className="EventCard-date">
            <svg className="icon-calendar" viewBox="0 0 416 448" width="416" height="448" aria-hidden="true">
              <path d="M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z"/>
            </svg>
            <DateRange start_time={start_time} end_time={end_time} />
          </div> */}
          <div className="EventCard-place">
            <svg className="icon-location" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
              <path d="M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"/>
            </svg>
            {place.name}
            {place.location && place.location.city && place.location.country &&
              <span>{place.location.city + ', ' + place.location.country}</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
