/* ==========================================================================
   Error
   ========================================================================== */

import React from 'react'
import MetaTags from 'react-meta-tags'

import Status from './Status'

if (process.env.WEBPACK) {
  require( '../css/NotFound.css' )
}

const NotFound = () => {
  const title = "Festic - Erreur : page non trouvée :("
  return (
    <Status code={404}>
      <div className="Page">
        <MetaTags>
          <title>{title}</title>
          <meta id="meta_title" property="og:title" content={title} />
        </MetaTags>
        <main role="main">
          <section className="Error">
            <h1>Page non trouvée<span>:(</span></h1>
          </section>
        </main>
      </div>
    </Status>
  )
}


export default NotFound
