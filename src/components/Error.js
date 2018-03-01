/* ==========================================================================
   Error
   ========================================================================== */

import React from 'react'
import { Route } from 'react-router-dom'

if (process.env.WEBPACK) {
  require( '../css/Error.css' )
}

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

/* export stateless component
   -------------------------------------------------------------------------- */
export default props => {
  return (
    <Status code={404}>
      <section className="Error">
        <h1>Page non trouvée<span>:(</span></h1>
      </section>
    </Status>
  )
}
