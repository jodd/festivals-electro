/* ==========================================================================
   Searchbox
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'

if (process.env.WEBPACK) {
  require( '../css/Searchbox.css' )
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

  constructor() {
    super()
    this.query = ''
    this.state = {
      data: undefined
    }
    this.onChange = this.onChange.bind(this)
    this.onReset = this.onReset.bind(this)
    this.close = this.close.bind(this)
  }

  onChange() {
    this.query = this.searchInput.value.trim()

    if (this.query) this.resetBtn.classList.remove('hidden')
    else this.resetBtn.classList.add('hidden')

    if (!this.state.data) {
      fetch(this.searchInput.form.action, {
        headers: { 'Accept': 'application/json' },
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(resObj => this.setState({ data: resObj.data }))
      .catch(error => {})
    } else {
      this.forceUpdate()
    }
  }

  onReset() {
    this.searchInput.value = ""
    this.searchInput.focus()
    this.onChange()
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
  }

  close() {
    this.btnOpen.classList.remove('active')
    this.searchboxContent.setAttribute('aria-expanded', 'false')
    this.searchInput.blur()
    this.searchInput.value = ''
    this.resetBtn.classList.add('hidden')
  }

  onClick(e) {
    if (!this.searchbox.contains(e.target)) {
      this.close()
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onClick.bind(this))
  }

  componentWillUnmount() {
    // TODO : this isnt working..
    document.body.removeEventListener('click', this.onClick)
  }

  render() {
    const { data } = this.state
    const result = { events: [], performers: [] }

    if (data && this.query) {
      const regex = new RegExp(this.query, "i")
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
          <svg height="24" width="24" viewBox="0 0 24 24" className="icon-magnifier" aria-hidden="true">
            <path fillRule="evenodd" d="M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/>
          </svg>
          <svg height="32" width="32" viewBox="0 0 32 32" className="icon-cross" aria-hidden="true">
            <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"/>
          </svg>
        </button>
        <div id="searchbox" className="Searchbox-content" aria-expanded="false"
          ref={el => this.searchboxContent = el}>
          <form role="search" action="/search" method="get">
            <input type="search" id="search" aria-label="Recherche"
              placeholder="Recherche" autoComplete="off" onChange={this.onChange}
              ref={el => this.searchInput = el} />
            <button type="reset" className="hidden"
              aria-label="Vider le champ de recherche" onClick={this.onReset}
              ref={el => this.resetBtn = el}>
              <svg height="32" width="32" viewBox="0 0 32 32" className="icon-cross" aria-hidden="true">
                <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"/>
              </svg>
            </button>
            <button type="submit" aria-label="Rechercher">
              <svg height="24" width="24" viewBox="0 0 24 24" className="icon-magnifier" aria-hidden="true">
                <path fillRule="evenodd" d="M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/>
              </svg>
            </button>
          </form>
          <div className="Searchbox-results">
            {!result.events.length && !result.performers.length &&
              <div className="Searchbox-results-nope">Rechercher un événement ou un artiste</div>
            }
            {result.events.length > 0 &&
              <div className="Searchbox-results-events">
                <span>Evénements</span>
                <ul>
                  {result.events.map(item =>
                    <Item key={item.id} item={item} close={this.close} />)}
                </ul>
              </div>
            }
            {result.performers.length > 0 &&
              <div className="Searchbox-results-performers">
                <span>Artistes</span>
                <ul>
                  {result.performers.map(item =>
                    <Item key={item.id} item={item} close={this.close} />)}
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
