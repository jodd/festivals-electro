/* ==========================================================================
   Server
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'

import express from 'express'
import passport from 'passport'
import securePassword from 'secure-password'
import { Strategy as LocalStrategy } from 'passport-local'
import webpack from 'webpack'

import routes from './routes/index'
import users from './routes/users'
import events from './routes/events'
import performers from './routes/performers'

/* server config */
const app = express()

const ENV = process.env.NODE_ENV || 'production'
const PORT = process.env.PORT || 8080

if (ENV === 'development') {

    const config = require('../webpack.dev')
    const compiler = webpack(config)

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      hot: true,
      publicPath: config.output.publicPath,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }))

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log,
      reload: true
    }))
} else if (ENV === 'production') {
  app.use('/assets', express.static(resolvePath(__dirname, '../dist')))
}

app.use('/assets', express.static(resolvePath(__dirname, '../public')))
//app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

/* Passport config (authentication) */
passport.use(new LocalStrategy((username, password, done) => {

  const data = fs.readFileSync(resolvePath(__dirname, 'db/users.json'), 'utf8')
  const users = data ? JSON.parse(data) : {}

  // Initialise our password policy
  const pwd = securePassword()
  const userPassword = Buffer.from(password)

  if (users[username]) {
    const user = { username: username, password: password }
    const hash = Buffer.from(users[username].password)
    pwd.verify(userPassword, hash, function (err, result) {
      if (err) return done(err)
      if (result === securePassword.INVALID) return done(null, false, { message: 'Incorrect password.' })
      if (result === securePassword.VALID) return done(null, user)
    })
  } else {
    return done(null, false, { message: 'Incorrect username.' })
  }
}))

passport.serializeUser(function(user, done) {
  done(null, user.username)
})

passport.deserializeUser(function(username, done) {
  const data = fs.readFileSync(resolvePath(__dirname, 'db/users.json'), 'utf8')
  const users = data ? JSON.parse(data) : {}

  if (users[username]) {
    done(null, { username: username, password: Buffer.from(users[username].password) })
  } else {
    done(Error(`User with username ${username} not found.`))
  }
})

/* handle requests */
app.get('/admin',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res, next) => {
    next()
  }
)

app.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}))

app.use('/', routes)
app.use('/users', users)
app.use('/events', events)
app.use('/performers', performers)


/* start server */
app.listen(PORT, '0.0.0.0', err => {
  if (err) {
    return console.error(err)
  }
  return console.info(`Server running on http://localhost:${PORT} [${ENV}]`)
})
