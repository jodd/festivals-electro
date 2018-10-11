/* ==========================================================================
   Routing
   ========================================================================== */

import App from './App'
import Home from './components/Home'
import Events from './components/Events'
import Event from './components/Event'
import Performer from './components/Performer'
import Performers from './components/Performers'
import NotFound from './components/NotFound'
import Map from './components/Map'
import Login from './components/Login'
import Admin from './components/Admin'
import Search from './components/Search'

export const routes = [{
    path: "/admin",
    exact: true,
    component: Admin,
    dataType: 'search'
  }, {
    component: App,
    routes: [{
      path: "/",
      exact: true,
      component: Home
    }, {
      path: "/login",
      exact: true,
      component: Login,
    }, {
      path: "/events",
      exact: true,
      component: Events,
      // dataType: 'upcomingEvents'
      dataType: 'events'
    }, {
      path: "/events/past",
      exact: true,
      component: Events,
      dataType: 'pastEvents'
    }, {
      path: "/search",
      exact: true,
      component: Search,
      dataType: 'search'
    }, {
      path: "/performers",
      exact: true,
      component: Performers,
      dataType: 'performers'
    }, {
      path: '/events/:id',
      exact: true,
      component: Event,
      dataType: 'event'
    }, {
      path: '/performers/:id',
      exact: true,
      component: Performer,
      dataType: 'performer'
    }, {
      path: '/map',
      exact: true,
      component: Map,
      dataType: 'events'
    }, {
      component: NotFound
    }]
  }
]
