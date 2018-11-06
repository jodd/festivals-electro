/* ==========================================================================
   Map
   ========================================================================== */

import React from 'react'
import MetaTags from 'react-meta-tags'
import { loadScript } from '../utils'

if (process.env.WEBPACK) {
  require('../css/Map.css')
}

const infowindowTpl = data => `
  <div class="Map-infowindow">
    <a class="Map-infowindow-link"
      href="${data.url}" onclick="event.preventDefault()"
      style="display: block;
        margin-top: 3px;
        font-size: 15px;
        line-height: 1.1;
        font-weight: bold;
        color: rgb(60, 60, 60);"
    >
      <img src="${data.image.source}" alt=""
        style="max-width: 100%;
          margin-bottom: 3px;" />
      ${data.title}
    </a>
  </div>`

function hasLocation(e) {
  return e.place && e.place.location && e.place.location.latitude && e.place.location.longitude
}

function currentOrigin() {
  return window.location.protocol + '//' + window.location.host
}

function closest(el, cls) {
  while (!el.classList.contains(cls) && (el = el.parentElement));
  return el
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class Map extends React.Component {
  static key = 'AIzaSyCucHvhHuMe0ErcBwFbkk798Ob7tndRUQs'

  constructor(props) {
    super()
    this.state = {
      events: props.events
    }
    this.onEventClick = this.onEventClick.bind(this)
  }

  componentDidMount() {
    if (window.google) {
      this.initMap.call(this)
    } else {
      const scripts = [
        "https://maps.googleapis.com/maps/api/js?key=" + Map.key,
        "/assets/markerclusterer.js"
      ]
      const promises = scripts.map(url => loadScript(url))

      Promise.all(promises).then(this.initMap.bind(this))
    }
  }

  initMap() {
    const { events } = this.state
    const { place: { location }} = events.find(e => hasLocation(e))

    const locatedEvents = []

    const map = new google.maps.Map(this.map, {
      center: { lat: location.latitude, lng: location.longitude },
      zoom: 5
    })

    for(let i = 0, e; e = events[i]; i++) {
      hasLocation(e) && locatedEvents.push({
        title: e.name,
        image: { source: e.cover ? e.cover.source : '' },
        url: '/events/' + e.id,
        position: {
          lat: e.place.location.latitude,
          lng: e.place.location.longitude
        },
        map: map
      })
    }

    const infowindow = new google.maps.InfoWindow({
      maxWidth: 120
    })

    const markers = locatedEvents.map(e => {
      const marker = new google.maps.Marker(e)

      marker.addListener('click', () => {
        infowindow.setContent(infowindowTpl(e))
        infowindow.open(map, marker)
      })
      return marker
    })

    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: '/assets/img/markerclusterer/m'});

    this.map.addEventListener('click', this.onEventClick)
  }

  onEventClick(e) {
    const link = closest(e.target, 'Map-infowindow-link')
    if (link) {
      this.props.history.push(link.pathname)
    }
  }

  componentWillUnmount() {
    this.map.removeEventListener('click', this.onEventClick)
  }

  render() {
    const title = "Carte des festivals electro"
    return (
      <div className="Page Page-map">
        <MetaTags>
          <title>{title}</title>
          <meta id="meta_title" property="og:title" content={title} />
        </MetaTags>
        <main role="main">
          <section className="Map">
            <div id="map" ref={el => this.map = el}></div>
          </section>
        </main>
      </div>
    )
  }
}
