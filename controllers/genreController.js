const Genre  = require('../models/genre')

const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.send(genres)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllGenres
}