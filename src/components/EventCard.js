/* ==========================================================================
   Event Card
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { DateSticker } from '../utils'
import Cover from './Cover'

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
      {cover.source &&
        <Link to={'/events/' + id} className="EventCard-picture">
          <Cover cover={cover} ratio={0.524} />
        </Link>}
      <div className="EventCard-content">
        <DateSticker datetime={start_time} />
        <div className="EventCard-title">
          <Link to={'/events/' + id}>{name}</Link>
          {/*pastEvent && <span className="sticker">Passé</span>*/}
        </div>
        <div className="EventCard-meta">
          {place &&
            <div className="EventCard-place">
              <svg className="icon-location" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"/>
              </svg>
              {place.name}
              {place.location && place.location.city && place.location.country &&
                <span>{place.location.city + ', ' + place.location.country}</span>
              }
            </div>}
        </div>
      </div>
    </div>
  )
}
