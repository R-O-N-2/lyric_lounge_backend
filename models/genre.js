// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = require('mongoose')

const Genre = new Schema(
    {
       genreName: { type: String, required: true}
    }
)

module.exports = Genre