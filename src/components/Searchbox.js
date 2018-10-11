/* ==========================================================================
   Searchbox
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

if (process.env.WEBPACK) {
  require('../css/Searchbox.css')
}

/* Sub Components
   -------------------------------------------------------------------------- */
const Item = ({item, close}) => {
  return (
    <li>
      <Link to={(item.events ? '/performers/' : '/events/') + item.id}
        onClick={close}>{item.name}</Link>
    </li>
  )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class SearchBox extends React.Component {

  constructor({query, data}) {
    super()
    this.state = {
      query: queryString.parse(query)['q'],
      data: data
    }
    this.onClick = this.onClick.bind(this)
  }

  onChange() {

    const query = this.searchInput.value.trim()

    if (query) {
      this.resetBtn.classList.remove('hidden')
      this.searchResults.classList.remove('hidden')
    } else {
      this.searchResults.classList.add('hidden')
      this.resetBtn.classList.add('hidden')
    }

    if (!this.state.data) {
      fetch(this.searchInput.form.action, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      .then(res => res.json())
      .then(data => this.setState({
        query: query,
        data: data
      }))
      .catch(err => { throw err })
    } else {
      this.setState({query: query})
    }
  }

  onReset(e) {
    e.preventDefault()
    this.searchInput.value = ""
    this.searchInput.focus()
    this.onChange()
  }

  onSubmit(e) {
    e.preventDefault()
  }

  toggle() {
    const isOpen = this.searchboxContent.getAttribute('aria-expanded') === 'true'

    if (isOpen) this.close()
    else this.open()
  }

  open() {
    this.btnOpen.classList.add('active')
    this.searchboxContent.setAttribute('aria-expanded', 'true')
    this.searchInput.focus()
    this.searchResults.classList.remove('hidden')
  }

  close(e) {
    this.btnOpen.classList.remove('active')
    this.searchboxContent.setAttribute('aria-expanded', 'false')
    this.searchInput.blur()
    this.searchResults.classList.add('hidden')
    e && (this.searchInput.value = e.target.textContent)
  }

  onClick(e) {
    if (!this.searchbox.contains(e.target)) {
      this.close()
    }
  }

  componentDidMount() {
    document.documentElement.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('click', this.onClick)
  }

  render() {
    const { query, data } = this.state
    const result = { events: [], performers: [] }

    if (data && query) {
      const regex = new RegExp(query, "i")
      for (let i = 0, e; e = data.events[i]; i++) {
        regex.test(e.name) && result.events.push(e)
      }
      for (let j = 0, p; p = data.performers[j]; j++) {
        regex.test(p.name) && result.performers.push(p)
      }
    }

    return (
      <div className="Searchbox" ref={el => this.searchbox = el}>
        <button className="Searchbox-btnOpen" aria-label="Rechercher"
          aria-controls="Searchbox" onClick={this.toggle.bind(this)}
          ref={el => this.btnOpen = el}>
          <svg viewBox="0 0 24 24" className="icon-magnifier" aria-hidden="true">
            <path fillRule="evenodd" d="M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/>
          </svg>
          <svg viewBox="0 0 32 32" className="icon-cross" aria-hidden="true">
            <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"/>
          </svg>
        </button>
        <div id="searchbox" className="Searchbox-content" aria-expanded="false"
          ref={el => this.searchboxContent = el}>
          <form role="search" action="/search" method="get">
            <input type="search" name="q" id="search" aria-label="Recherche"
              placeholder="Recherche" autoComplete="off"
              onFocus={this.onChange.bind(this)}
              onChange={this.onChange.bind(this)}
              onSubmit={this.onSubmit.bind(this)}
              ref={el => this.searchInput = el}
              defaultValue={query}/>
            <button type="reset" className="hidden"
              aria-label="Vider le champ de recherche"
              onClick={this.onReset.bind(this)}
              ref={el => this.resetBtn = el}>
              <svg viewBox="0 0 32 32" className="icon-cross" aria-hidden="true">
                <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"/>
              </svg>
            </button>
            <button type="submit" aria-label="Rechercher">
              <svg viewBox="0 0 24 24" className="icon-magnifier" aria-hidden="true">
                <path fillRule="evenodd" d="M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/>
              </svg>
            </button>
          </form>
          <div className="Searchbox-results hidden" ref={el => this.searchResults = el}>
            {query && <div className="Searchbox-results-events">
              <span>Festivals</span>
              {result.events.length === 0 &&
                <div className="Searchbox-results-events-noResult">Aucun résultat</div>}
              {result.events.length > 0 &&
                <ul>
                  {result.events.map(item =>
                    <Item key={item.id} item={item} close={this.close.bind(this)} />)}
                </ul>}
            </div>}
            {query && <div className="Searchbox-results-performers">
              <span>Artistes</span>
              {result.performers.length === 0 &&
                <div className="Searchbox-results-performers-noResult">Aucun résultat</div>}
              {result.performers.length > 0 &&
                <ul>
                  {result.performers.map(item =>
                    <Item key={item.id} item={item} close={this.close.bind(this)} />)}
                </ul>}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
