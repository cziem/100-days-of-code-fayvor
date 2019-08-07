const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()

const app = express()
const router = express.Router()

const environment = process.env.NODE_ENV
const stage = require('./config')[environment]
const URI = process.env.MONGODB_URI

// Routes
const routes = require('./routes/index.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/100Days_Node_Jwt_Auth', { useNewUrlParser: true })
  .then(() => console.log('connected to DB'))
  .catch(err => console.log('Error occurred', err))


if (environment !== 'production') {
  app.use(logger('dev'))
}

app.use('/api/v1', routes(router))

app.listen(`${stage.port}`, () => {
  console.log(`Server live at localhost:${stage.port}`)
})

module.exports = app
