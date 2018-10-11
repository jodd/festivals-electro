/* ==========================================================================
   User
   ========================================================================== */

import React from 'react'
import { postJSON } from '../utils'

if (process.env.WEBPACK) {
  require('../css/User.css')
}

export default class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: props.username
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const form = e.target
    postJSON(form.action, {
      username: form.elements['username'].value,
      password: form.elements['password'].value
    })
    .then(data => this.setState({
      username: data.username
    }))
    .catch(error => { console.error(error) })
  }

  render() {
    const { username, password } = this.state
    return (
      <section className="User">
        <form action="/users" method="post" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" defaultValue={username}/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password"/>
          <input type="submit" value="Save"/>
        </form>
      </section>
    )
  }
}
