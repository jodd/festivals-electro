/* ==========================================================================
   Search
   ========================================================================== */

import React from 'react'
import MetaTags from 'react-meta-tags'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import EventMinicard from '../components/EventMinicard'
import PerformerMinicard from '../components/PerformerMinicard'

if (process.env.WEBPACK) {
  require('../css/Search.css')
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class Search extends React.Component {

  constructor({ events, performers }) {
    super()
    this.state = {
      events: events,
      performers: performers
    }
  }

  render() {
    const data = { events: this.props.events, performers: this.props.performers }
    const result = { events: [], performers: [] }
    const parsed = queryString.parse(this.props.location.search)
    const query = parsed.q

    // populate results
    if (data && query) {
      const regex = new RegExp(query, "i")
      for (let i = 0, e; e = data.events[i]; i++) {
        regex.test(e.name) && result.events.push(e)
      }
      for (let j = 0, p; p = data.performers[j]; j++) {
        regex.test(p.name) && result.performers.push(p)
      }
    }

    const title = (query ? query + " - " : "") + "Recherche Festivals Electro"

    return (
      <div className="Page">
        <MetaTags>
          <title>{title}</title>
          <meta id="meta_title" property="og:title" content={title} />
        </MetaTags>
        <main role="main">
          <div className="Search">
            <section className="Search-results">
              <div className="Search-results-events">
                <span>Festivals</span>
                {!result.events.length &&
                  <div>Aucun résultat</div>
                }
                {result.events.length > 0 &&
                  <ul>
                    {result.events.map(item =>
                      <EventMinicard key={item.id} event={item}/>)
                    }
                  </ul>
                }
              </div>
              <div className="Search-results-performers">
                <span>Artistes</span>
                {!result.performers.length &&
                  <div>Aucun résultat</div>
                }
                {result.performers.length > 0 &&
                  <ul>
                    {result.performers.map(item =>
                      <li key={item.id}>
                        <PerformerMinicard performer={item}/>
                      </li>)
                    }
                  </ul>
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
}
