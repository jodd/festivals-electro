/* ==========================================================================
   Performer Minicard
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'

if (process.env.WEBPACK) {
  require('../css/PerformerMinicard.css')
}

export default ({ performer }) => {
  return (
    <div className="PerformerMinicard">
      <Link to={'/performers/' + performer.id}>
        <img src={performer.picture.data.url}
          alt={"Photo de profil de " + performer.name}
          className="PerformerMinicard-picture" />
        <strong className="PerformerMinicard-info">
          <span>{performer.name}</span>
        </strong>
      </Link>
    </div>
  )
}
