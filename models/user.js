// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = require('mongoose')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const User = new Schema(
    {
        username: { type: String, required: true },
        location: { type: String, required: true },
        contact: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = User