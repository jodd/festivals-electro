/* ==========================================================================
   Users
   ========================================================================== */

import fs from 'fs'
import { resolve as resolvePath } from 'path'

import express from 'express'
import securePassword from 'secure-password'

const router = express.Router()

router.post('/', (req, res) => {

  const { username, password } = req.body
  const data = fs.readFileSync(resolvePath(__dirname, '../db/users.json'), 'utf8')
  const users = data ? JSON.parse(data) : {}

  // Initialise our password policy
  const pwd = securePassword()
  const userPassword = Buffer.from(password)

  pwd.hash(userPassword, (err, hash) => {
    if (err) throw err

    if (users[username]) {
      users[username].password = hash
    } else {
      users[username] = { password: hash }
    }

    fs.writeFileSync(resolvePath(__dirname, '../db/users.json'), JSON.stringify(users))
  })

  res.send({ username: username, password: users[username].password })
})

export default router
