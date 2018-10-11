/* ==========================================================================
   App
   ========================================================================== */

import React from 'react'
import { renderRoutes } from 'react-router-config'

// local modules
import Header from './components/Header'

if (process.env.WEBPACK) {
  require('./css/index.css')
  require('./css/App.css')
}

export default ({ route, ...extraProps }) => {
  return (
    <div className="App">
      <Header {...extraProps} />
      {renderRoutes(route.routes, extraProps)}
    </div>
  )
}
