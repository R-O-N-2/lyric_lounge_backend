const mongoose = require('mongoose')
const { model } = require('mongoose')
const userSchema = require('./user')
const genreSchema = require('./genre')
const workSchema = require('./work')

const User = model('User', userSchema)
const Genre = model('Genre', genreSchema)
const Work = model('Work', workSchema)


module.exports = { User, Genre, Work }