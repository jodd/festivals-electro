/* ==========================================================================
   Routing
   ========================================================================== */

import App from './App'
import Home from './pages/Home'
import Events from './pages/Events'
import Event from './pages/Event'
import Performer from './pages/Performer'
import Performers from './pages/Performers'
import NotFound from './pages/NotFound'
import Map from './pages/Map'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Search from './pages/Search'

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
