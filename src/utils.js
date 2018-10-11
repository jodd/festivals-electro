/* ==========================================================================
   Utilities
   ========================================================================== */

import React from 'react'

const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const shortMonths = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc']

/* DateSticker
   -------------------------------------------------------------------------- */
const DateSticker = ({datetime}) => {

  const date = new Date(datetime)

  return (
    <time dateTime={datetime} className="DateSticker">
      <span className="DateSticker-day">{date.getDate()}</span>
      <span className="DateSticker-month">{shortMonths[date.getMonth()]}</span>
    </time>
  )
}

/* DateRange
   -------------------------------------------------------------------------- */
const DateRange = ({start_time, end_time}) => {

  const start_date = new Date(start_time)
  const end_date = new Date(end_time)
  const startDate = start_date.getDate()
  const endDate = end_date.getDate()
  const startMonth = start_date.getMonth()
  const endMonth = end_date.getMonth()

  if (startDate === endDate && startMonth === endMonth) {
    return (
      <span className="DateRange">
        <time dateTime={end_time}>{startDate + ' ' + months[startMonth]}</time>
      </span>)
  } else if (startMonth === endMonth) {
    return (
      <span className="DateRange">
        <time dateTime={start_time}>{startDate}</time> au <time dateTime={end_time}>{endDate + ' ' + months[endMonth]}</time>
      </span>)
  } else {
    return (
      <span className="DateRange">
        <time dateTime={start_time}>{startDate + ' ' + months[startMonth]}</time> au <time dateTime={end_time}>{endDate + ' ' + months[endMonth]}</time>
      </span>)
  }
}

/* loadScript
   -------------------------------------------------------------------------- */
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    document.body.appendChild(script)
    script.onload = resolve
    script.onerror = reject
    script.async = true
    script.src = url
  })
}

/* postJSON
   -------------------------------------------------------------------------- */
function postJSON(url, obj) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())
}

/* Export components
   -------------------------------------------------------------------------- */
export {
  DateSticker,
  DateRange,
  loadScript,
  postJSON
}
