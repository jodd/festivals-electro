/* ==========================================================================
   Footer
   ========================================================================== */

import React from 'react'

if (process.env.WEBPACK) {
  require( '../css/Footer.css' )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default props => (
  <footer className="Footer" role="contentinfo">&copy; {new Date().getFullYear()}</footer>
)
