/* ==========================================================================
   EventMinicard
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { DateSticker } from '../utils'

if (process.env.WEBPACK) {
  require( '../css/EventMinicard.css' )
}

export default ({ event }) => {
  const { id, name, start_time, place } = event
  return (
    <li className="EventMinicard">
      <DateSticker datetime={start_time} />
      <div className="EventMinicard-content">
        <Link to={'/events/' + id} className="EventMinicard-title">
          {name}
        </Link>
        {place &&
          <div className="EventMinicard-place">
            <svg className="icon-location" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"/>
            </svg>
            {(place.location && place.location.city && place.location.country) ?
              <span>{place.location.city + ', ' + place.location.country}</span> :
              <span>{place.name}</span>}
          </div>}
      </div>
    </li>
  )
}
