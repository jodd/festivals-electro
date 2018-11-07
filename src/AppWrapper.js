/* ==========================================================================
    Client application wrapper
   ========================================================================== */
/*
  This wrapper deals with :
  - get the app initial state
  - fetch data from the server when the app re-render
  - handle the scroll position when user browsing through history
 */

import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'

class AppWrapper extends React.Component {

  static scrollPositions = {}

  constructor() {
    super()
    this.state = Object.assign({}, window.__INITIAL_STATE__,
      { previousLocation: null })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.location === this.props.location) return

    this.setState({
      previousLocation: this.props.location
    })

    fetch(nextProps.location.pathname, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        previousLocation: null,
        data: data
      })
    })
    .catch(err => { throw err })
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
    const { previousLocation, data } = this.state

    if (data.status === 404)
      location.pathname = '/error'

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
    } else {
      // always scroll to top on route change
      scroll(0, 0)
    }
  }
}

export default withRouter(AppWrapper)
