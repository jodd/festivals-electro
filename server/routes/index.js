/* ==========================================================================
   Index
   ========================================================================== */

import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import MetaTagsServer from 'react-meta-tags/server'
import { MetaTagsContext } from 'react-meta-tags'

import DB from '../modules/db'

import { routes } from '../../src/routes'
import template from '../template'


const router = express.Router()

function loadBranchData(location) {

  const branch = matchRoutes(routes, location.path)

  const promises = branch.map(({ route, match }) => {
    const fetchData = DB[route.dataType]
    return fetchData instanceof Function
      ? fetchData(match.params)
      : Promise.resolve(null)
  })

  return Promise.all(promises).then(data =>
    data.reduce((acc, value) => Object.assign({}, acc, value)))
}

router.get('*', (req, res) => {

  const metaTagsInstance = MetaTagsServer()

  return loadBranchData(req).then(data => {

    const context = data.hasOwnProperty('status')
      ? { status: data.status }
      : {}

    const location = context.status === 404 ? '/error' : req.url

    // update data obj with user info (if available)
    data.user = {
      username: req.user ? req.user.username : null
    }

    // handle async json requests
    if (req.xhr) {
      return res.json(data)
    }

    const html = renderToString(
      <MetaTagsContext extract={metaTagsInstance.extract}>
        <StaticRouter location={location} context={context}>
          {renderRoutes(routes, data)}
        </StaticRouter>
      </MetaTagsContext>)

    if (context.status === 404) {
      res.status(404)
    }

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url)
    }

    res.write(template({
      meta: metaTagsInstance.renderToString(),
      body: html,
      data: JSON.stringify(data)
    }))

    res.end()

  }).catch(err => { throw err })
})

export default router
