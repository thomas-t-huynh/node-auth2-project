const express = require('express')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)


module.exports = server