const mongoose = require('mongoose')
const { model } = require('mongoose')
const userSchema = require('./userModel')
const genreSchema = require('./genreModel')
const workSchema = require('./workModel')

const User = model('User', userSchema)
const Genre = model('Genre', genreSchema)
const Work = model('Work', workSchema)


module.exports = { User, Genre, Work }