const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const res = require('express/lib/response')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 9000

// these parsers should come before the app.use(require('./routes')) (!)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(require('./routes'))

mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true })
  .then((connection) => {
    console.log('Connected successfully to database')
  })
  .catch(err => console.log(`There was an error: ${err}`))

app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})