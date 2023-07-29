const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/lyric_lounge_backend'

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('connection error', e.message)
    })

const db = mongoose.connection

module.exports = db