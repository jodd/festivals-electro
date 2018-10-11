/* ==========================================================================
   Performers
   ========================================================================== */

import React from 'react'
import MetaTags from 'react-meta-tags'
import { Link } from 'react-router-dom'

if (process.env.WEBPACK) {
  require( '../css/Performers.css' )
}

/* Sub Components
   -------------------------------------------------------------------------- */
const PerformerCard = ({item}) => {
  return (
    <li className="PerformerCard">
      <Link to={'/performers/' + item.id}>
        <img src={item.picture.data.url} alt=""/>
        <span>{item.name}</span>
      </Link>
    </li>
  )
}

/* Component definition
   -------------------------------------------------------------------------- */
export default ({performers}) => {

  const title = "Tous les artistes"
  const list = performers || []

  // sort list in alphabetical order
  list.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    return nameA < nameB ? -1
      : nameA > nameB ? 1
      : 0
  })

  return (
    <div className="Page">
      <MetaTags>
        <title>{title}</title>
        <meta id="meta_title" property="og:title" content={title} />
      </MetaTags>
      <main role="main">
        <section className="Performers">
          <ul>
            {list.map(item => <PerformerCard key={item.id} item={item} />)}
          </ul>
        </section>
      </main>
    </div>
  )
}
