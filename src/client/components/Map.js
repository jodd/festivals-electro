/* ==========================================================================
   Map
   ========================================================================== */

import React from 'react'
import { loadScript } from '../utils'

if (process.env.WEBPACK) {
  require( '../css/Map.css' )
}

const infowindowTpl = data => `
  <div class="Map-infowindow">
    <img src="${data.image.source}" alt="" style="max-width: 100%;" />
    <a href="${data.url}" onclick="event.preventDefault()"
      style="display: block;
        margin-top: 3px;
        font-size: 15px;
        line-height: 1.1;
        font-weight: bold;
        color: rgb(60, 60, 60);"
    >${data.title}</a>
  </div>`

function hasLocation(e) {
  return e.place && e.place.location && e.place.location.latitude && e.place.location.longitude
}

function currentOrigin() {
  return window.location.protocol + '//' + window.location.host
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class Map extends React.Component {
  static key = 'AIzaSyCucHvhHuMe0ErcBwFbkk798Ob7tndRUQs'

  constructor({events}) {
    super()
    this.state = {
      events: events
    }
  }

  componentDidMount() {
    if (window.google) {
      this.initMap.call(this)
    } else {
      loadScript("https://maps.googleapis.com/maps/api/js?key=" + Map.key)
        .then(this.initMap.bind(this))
    }
  }

  initMap() {
    const { events } = this.state
    const { place: { location }} = events.find(e => hasLocation(e))

    const locatedEvents = []

    const map = new google.maps.Map(document.getElementById('map'), {
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

    const markers = locatedEvents.map(e => {
      const marker = new google.maps.Marker(e)
      const infowindow = new google.maps.InfoWindow({
        content: infowindowTpl(e, this.props.history),
        maxWidth: 120
      })
      marker.addListener('click', () => infowindow.open(map, marker))
      return marker
    })

    window.addEventListener('click', e => {
      if (this.map.contains(e.target) && e.target.tagName === 'A') {
        this.props.history.push(e.target.pathname)
      }
    })
  }

  render() {
    return (
      <section className="Map">
        <div id="map" ref={el => this.map = el}></div>
      </section>
    )
  }
}
