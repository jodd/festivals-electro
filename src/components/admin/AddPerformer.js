/* ==========================================================================
   Admin
   ========================================================================== */

import React from 'react'
import { Link } from 'react-router-dom'
import { postJSON } from '../../utils'

if (process.env.WEBPACK) {
  require( '../../css/AddPerformer.css' )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default class AddPerformer extends React.Component {

  constructor(props) {
    super(props)
    this.focusedIndex = null
    this.listenInput = false
    this.state = {
      query: ''
    }
    this.onKeydown = this.onKeydown.bind(this)
  }

  onChange() {
    const query = this.performerInput.value.trim()

    this.performerList && this.performerList.classList.remove('hidden')

    this.focusedIndex = null

    if (query) {
      !this.listenInput && this.performerInput.addEventListener('keydown', this.onKeydown)
      this.listenInput = true
    } else {
      this.performerInput.removeEventListener('keydown', this.onKeydown)
      this.performerList && this.performerList.removeEventListener('keydown', this.onKeydown)
      this.listenInput = false
    }

    this.setState({query: query})
  }

  onSubmit(e) {
    e.preventDefault()
    postJSON('/events/' + this.props.item.id, {
      performer: this.performerInput.value
    })
    .then(data => this.props.onSubmit(data))
    .catch(err => { throw err })
  }

  close() {
    this.performerList.classList.add('hidden')
  }

  onKeydown(e) {
    if (/ArrowUp|ArrowDown/.test(e.key)) {
      e.preventDefault()
      const items = this.performerList.childNodes

      if (this.focusedIndex === null) {
        this.focusedIndex = e.key === 'ArrowUp' ? items.length - 1 : 0
      } else {
        if (e.key === 'ArrowUp') {
          this.focusedIndex = this.focusedIndex === 0 ?
            items.length - 1 :
            this.focusedIndex - 1
        } else {
          this.focusedIndex = this.focusedIndex === items.length - 1 ?
            0 :
            this.focusedIndex + 1
        }
      }

      items.item(this.focusedIndex).childNodes[0].focus()
    }
  }

  onClick(e) {
    e.preventDefault()
    this.performerInput.value = e.target.textContent
    this.performerInput.focus()
    this.close()
  }

  componentDidUpdate() {
    this.performerList && this.performerList.addEventListener('keydown', this.onKeydown)
  }

  render() {
    const { query } = this.state
    const result = []

    if (query) {
      const regex = new RegExp(query, "i")
      for (let i = 0, p; p = this.props.performers[i]; i++) {
        regex.test(p.name) && result.push(p)
      }
    }

    return (
      <form onSubmit={this.onSubmit.bind(this)} className="AddPerformer">
        <h3>Line-up</h3>
        <div>
          <input type="text" name="performer" placeholder="Ajouter un artiste"
            autoComplete="off"
            onChange={this.onChange.bind(this)}
            ref={el => this.performerInput = el} />
          {result.length > 0 &&
            <ul className="AddPerformer-list" ref={el => this.performerList = el}>
              {result.map(p =>
                <li key={p.id}>
                  <Link to={'/performers/' + p.id} onClick={this.onClick.bind(this)}>
                    {p.name}
                  </Link>
                </li>
              )}
            </ul>
          }
        </div>
      </form>
    )
  }
}
