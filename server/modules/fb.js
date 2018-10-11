/* ==========================================================================
   Facebook utilities
   ========================================================================== */

import https from 'https'

const app_id = '***REMOVED***'
const app_secret = '***REMOVED***'
const client_token = '***REMOVED***'
const access_token = app_id + '|' + app_secret
const token_param = '&access_token=' + access_token
// const token_param = '&access_token=' + client_token

export default {

  fetch: path => new Promise((resolve, reject) => {

    const req = https.request({
      hostname: 'graph.facebook.com',
      path: '/v2.12/' + path + token_param
    }, res => {
      const buffer = []
      res.on('data', chunk => buffer.push(chunk))
      res.on('end', () => resolve(JSON.parse(buffer.join(''))))
    })

    req.on('error', error => {
      console.error(`problem with request: ${error.message}`)
    })

    req.end()
  }),

  /* Batch request
   * make multiple, potentially unrelated, Graph API calls in a single request
   * https://developers.facebook.com/docs/graph-api/making-multiple-requests/
   */
  batch: params => new Promise((resolve, reject) => {

    const batch = []

    for (let i = params.length, param; param = params[i--];) {
      batch.push({
        method: 'GET',
        relative_url: 'v2.12/?ids=' + param.ids.join() + param.fields
      })
    }

    const req = https.request({
      method: 'POST',
      hostname: 'graph.facebook.com'
    }, res => {
      const buffer = []
      res.on('data', chunk => buffer.push(chunk))
      res.on('end', () => resolve(JSON.parse(buffer.join(''))))
    })

    req.on('error', error => {
      console.error(`problem with request: ${error.message}`)
    })

    req.write(querystring.stringify({
      access_token: access_token,
      batch: JSON.stringify(batch)
    }))

    req.end()
  })
}




// const FBAccessTokenRequest = new Promise((resolve, reject) => {
//   https.request({
//     hostname: 'graph.facebook.com',
//     path: '/oauth/acess_token?client_id' + FBAppId + '&client_secret' + FBAppSecret + '&grant_type=client_credentials',
//     headers: { 'content-type': 'application/json' }
//   },
//   response => {
//     console.log('FBAccessTokenRequest response', response)
//     const buffer = []
//     response.on('data', chunk => buffer.push(chunk))
//     response.on('end', () => {
//       const foo = JSON.parse(buffer.join(''))
//       // console.log(foo)
//       resolve(foo)
//     })
//   }).end()
// })
