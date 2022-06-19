const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const res = require('express/lib/response')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

// these parsers should come before the app.use(require('./routes')) (!)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(require('./routes'))

mongoose.connect('mongodb://localhost:27017/naped', { useNewUrlParser: true })
  .then((connection) => {
    console.log('Connected successfully to database')
  })
  .catch(err => console.log(`Failed to connect with DB: ${err}`))

app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})