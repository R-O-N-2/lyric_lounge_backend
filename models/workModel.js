// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = require('mongoose')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const Work = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 2, 
      maxlength: 50
    },
    genre: {
      type: Schema.Types.ObjectId,
      ref: 'Genre'
    },
    content: [
      {
      type: String,
      }
    ],
    // likes: [
    //   {
    //   type: '',
    //   ref: ''
    //   }
    // ],
  }
)

module.exports = Work
