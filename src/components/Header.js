/* ==========================================================================
   Header
   ========================================================================== */

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Searchbox from './Searchbox'

if (process.env.WEBPACK) {
  require( '../css/Header.css' )
}

/* Sub Components
   -------------------------------------------------------------------------- */
const Nav = props => (
  <nav role="navigation">
    <ul>
      <li className="Nav-item">
        <NavLink exact to="/events">
          <svg className="icon-calendar" viewBox="0 0 416 448" width="416" height="448" aria-hidden="true">
            <path d="M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z"/>
          </svg>
          <span>Evénements</span>
        </NavLink>
      </li>
      <li className="Nav-item">
        <NavLink exact to="/performers">
          <svg className="icon-group" viewBox="0 0 30 30" aria-hidden="true">
            <path d="M15.649 21.044C14.091 20.498 12.477 20.431 12 19v-2c.45-.223 1.736-1.755 1.872-2.952.08-.283.142-1.295.142-1.523 0-1.249-.019-3.831.763-5.852-.273-1.358-.986-2.502-2.515-2.653C11.853 3.343 10.805 3 9.442 3c-5.451.094-6.008 3.873-4.914 8.214-.212.122-.562.51-.474 1.198.164 1.283.72 1.608 1.074 1.635C5.263 15.245 6.55 16.777 7 17v2c-1 3-7 0-7 8h12c0-3.548 1.99-5.077 3.649-5.956z"/><path d="M14 27c0-5 5-4 6-6.707v-1.275c-3.621 0-4.626-1.491-4.626-1.491C17.266 15.953 13.688 5 20.13 5c0 0 .87-1 1.994-1C30 4 26.446 15.893 28.483 17.565c0 0-.844 1.44-4.483 1.44v1.288C25 23 30 22 30 27H14z"/>
          </svg>
          <span>Artistes</span>
        </NavLink>
      </li>
      <li className="Nav-item">
        <NavLink exact to="/map">
          <svg className="icon-map" viewBox="0 0 512 512" width="512" height="512" aria-hidden="true">
            <path d="M336 96L176 32 0 96v384l176-64 160 64 176-64V32L336 96zM192 72.865l128 51.2v315.069l-128-51.199V72.865zM32 118.414l128-46.545v315.9L32 434.313V118.414zm448 275.172l-128 46.546v-315.9l128-46.545v315.899z"/>
          </svg>
          <span>Carte</span>
        </NavLink>
      </li>
    </ul>
  </nav>
)

/* Component definition
   -------------------------------------------------------------------------- */
export default props => {
  return (
    <header className="Header" role="banner">
      <div className="Header-content">
        <Link to="/" className="Header-logo">
          <svg viewBox="0 0 560 420" width="560" height="420" aria-hidden="true">
            <path d="M550.489 8.021l-300.337-.666v119.987L130.165 7.355 54.84 82.013l75.325 75.326-120.654-.667v105.99h120.654l-74.659 73.991 75.326 75.326 119.32-119.988v120.654h299.969L347.476 210 550.489 8.021z" />
          </svg>
        </Link>
        <Nav />
        <Searchbox />
      </div>
    </header>
  )
}
