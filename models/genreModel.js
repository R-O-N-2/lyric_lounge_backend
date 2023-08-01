// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = require('mongoose')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Genre = new Schema(
    {
       genreName: { type: String, required: true}
    }
)


module.exports = Genre