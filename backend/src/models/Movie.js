const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  typeMovie:{
    type: String
  },
  poster: {
    type: String,
  },
  imdbID:{
    type: String,
    required: true
  }
},{
  timestamps: true 
})

module.exports = model('Movie', MovieSchema)
