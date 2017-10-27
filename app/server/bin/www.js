const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const compression = require('compression')
const app = express()

const userApi = require('../router/userApi')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use(compression({
  threshold: 0
}))

// back end router
app.use('/api/user', userApi)

// port listen
app.use((req, res, next) => {
  var err = new Error('This page not found')
  err.status = 404
  next(err)
})

app.listen(3000, () => {
  console.log('Server running in port 3000...')
})