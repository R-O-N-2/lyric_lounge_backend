const { Schema } = require('mongoose')

const Work = new Schema(
  {

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

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
  }
)

module.exports = Work
