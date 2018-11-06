/* ==========================================================================
   Login
   ========================================================================== */

import React from 'react'
import MetaTags from 'react-meta-tags'
import { postJSON } from '../utils'

if (process.env.WEBPACK) {
  require('../css/Login.css')
}

export default props => {
  const title = "Festivals Electro - Admin login"
  return (
    <div className="Page">
      <MetaTags>
        <title>{title}</title>
        <meta id="meta_title" property="og:title" content={title} />
      </MetaTags>
      <main role="main">
        <section className="Login">
          <form action="/login" method="post">
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username"/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password"/>
            </div>
            <div>
              <input type="submit" value="Log In"/>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
