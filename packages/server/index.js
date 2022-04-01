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
console.log(process.env.DATABASE_LOCAL);
mongoose.connect('mongodb://mongo:27017/naped', { useNewUrlParser: true })
  .then((connection) => {
    console.log('Connected successfully to database')
  })
  .catch(err => console.log(`There was an error: ${err}`))

app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})