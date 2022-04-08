const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The post must have a title.'],
    unique: true,
    trim: true
  },
  subTitle: {
    type: String,
    required: [true, 'The post must have a subtitle.']
  },
  imageUrl: {
    type: String,
    required: [true, 'The url image of post must be specified.']
  },
  category: {
    type: String,
    required: [true, 'The post category must be specified.'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'The post content must be specified.'],
    trim: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
})
postSchema.index({ title: 'text' })

// mongoose.model creates a new collection. The first argument defines the name of this collection
module.exports = mongoose.model('Post', postSchema);