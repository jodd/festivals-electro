/* ==========================================================================
   Cover
   ========================================================================== */

import React from 'react'

if (process.env.WEBPACK) {
  require( '../css/Cover.css' )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default props => {
  const { ratio, alt = "", cover: { source, offset_y }} = props

  function imageLoaded(e) {
    // reset
    e.target.parentNode.classList.remove('fitHeight')
    e.target.style = ''

    if (e.target.naturalHeight/e.target.naturalWidth < ratio) {
      e.target.parentNode.classList.add('fitHeight')
    } else {
      const offset = Math.ceil((e.target.clientHeight - e.target.parentNode.clientHeight) * Math.min(offset_y * 0.01, 1))
      e.target.style = 'top: -' + offset + 'px'
    }
  }

  const style = {
    paddingTop: ratio * 100 + '%'
  }

  return (
    <div className="Cover" style={style}>
      <img src={source} onLoad={imageLoaded} alt={alt}/>
    </div>
  )
}
