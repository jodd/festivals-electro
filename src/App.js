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

export default ({ route, ...extraProps }) => (
  <div className="App">
    <Header />
    <main role="main">
      {renderRoutes(route.routes, extraProps)}
    </main>
  </div>
)
