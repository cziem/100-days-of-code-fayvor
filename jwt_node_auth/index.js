const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
const router = express.Router()

const environment = process.env.NODE_ENV
const stage = require('./config')[environment]

// Routes
const routes = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (environment !== 'production') {
  app.use(logger('dev'))
}

app.use('/api/v1', routes(router))

app.listen(`${stage.port}`, () => {
  console.log(`Server live at localhost:${stage.port}`)
})

module.exports = app
