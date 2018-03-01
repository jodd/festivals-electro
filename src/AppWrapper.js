/* ==========================================================================
    Client application wrapper
   ========================================================================== */
/*
  This wrapper deals with :
  - get the app initial state
  - fetch data from the server when the app re-render
  - update title and meta
  - handle the scroll position when user browsing through history
 */

import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
// import 'imports-loader?Promise=promise-polyfill!whatwg-fetch'

class AppWrapper extends React.Component {

  static scrollPositions = {}

  constructor() {
    super()
    this.state = Object.assign({}, window.__INITIAL_STATE__,
      { previousLocation: null })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.location === this.props.location) return

    let status

    this.setState({
      previousLocation: this.props.location
    })

    fetch(nextProps.location.pathname, {
      headers: { 'Accept': 'application/json' }
    })
    .then(res => {
      status = res.status
      return res.json()
    })
    .then(resObj => {
      this.setState({
        previousLocation: null,
        status: status,
        meta: resObj.meta,
        data: resObj.data
      })
    })
    .catch(error => {})
  }

  componentWillUpdate(nextProps) {

    if (nextProps.location === this.props.location) return

    // Remember scroll position so we can restore if we return to this
    // view via browser history
    const { location: { key="root" }} = this.props
    AppWrapper.scrollPositions[key] = [window.pageXOffset, window.pageYOffset]
  }

  render() {
    const { location } = this.props
    const { previousLocation, status, meta, data } = this.state

    // update meta
    if (meta) {
      document.title = meta.title
      document.querySelector('[property="og:title"]')
        .setAttribute('content', meta.title)
        document.querySelector('[property="og:image"]')
          .setAttribute('content', meta.image)
    }
    document.querySelector('[property="og:url"]')
      .setAttribute('content', window.location.href)

    // handle cases when a route matches but the server says the dynamic part
    // of the URL is invalid
    // TODO : don't change location obj (from props)
    if (status === 404) {
      location.pathname = '/error'
    }

    return (
      <Route location={previousLocation || location} render={() =>
        renderRoutes(routes, data)
      }/>
    )
  }

  componentDidUpdate() {
    const { history: { action }, location: { key="root" }} = this.props
    // POP means user is going forward or backward in history,
    // restore previous scroll position
    if (action === 'POP') {
      const pos = AppWrapper.scrollPositions[key]
      if (pos) {
        scroll(pos[0], pos[1])
        return
      }
    }
  }
}

export default withRouter(AppWrapper)
