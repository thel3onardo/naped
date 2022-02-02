const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creation_date: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)