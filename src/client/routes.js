/* ==========================================================================
   Routing
   ========================================================================== */

import App from './App'
import Home from './components/Home'
import Events from './components/Events'
import Event from './components/Event'
import Performer from './components/Performer'
import Performers from './components/Performers'
import NotFound from './components/Error'
import Map from './components/Map'
import Admin from './components/Admin'

export const routes = [{
    path: "/admin",
    exact: true,
    component: Admin,
  }, {
    component: App,
    routes: [{
      path: "/",
      exact: true,
      component: Home
    }, {
      path: "/events",
      exact: true,
      component: Events
    }, {
      path: "/events/past",
      exact: true,
      component: Events
    }, {
      path: "/search",
      exact: true
    }, {
      path: "/performers",
      exact: true,
      component: Performers
    }, {
      path: '/events/:id',
      exact: true,
      component: Event
    }, {
      path: '/performers/:id',
      exact: true,
      component: Performer
    }, {
      path: '/map',
      exact: true,
      component: Map
    }, {
      component: NotFound
    }]
  }
]

// export const routes = [{
//     path: "/admin",
//     exact: true,
//     component: require('./components/Admin'),
//   }, {
//     component: require('./App'),
//     routes: [{
//       path: "/",
//       exact: true,
//       component: require('./components/Home')
//     }, {
//       path: "/events",
//       exact: true,
//       component: require('./components/Events')
//     }, {
//       path: "/events/past",
//       exact: true,
//       component: require('./components/Events')
//     }, {
//       path: "/search",
//       exact: true
//     }, {
//       path: "/performers",
//       exact: true,
//       component: require('./components/Performers')
//     }, {
//       path: '/events/:id',
//       exact: true,
//       component: require('./components/Event')
//     }, {
//       path: '/performers/:id',
//       exact: true,
//       component: require('./components/Performer')
//     }, {
//       path: '/map',
//       exact: true,
//       component: Map
//     }, {
//       component: require('./components/Error')
//     }]
//   }
// ]
