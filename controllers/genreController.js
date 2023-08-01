const { Genre }  = require('../models')

const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.send(genres)
    } catch(error) {
        throw error
    }
}

const getGenreByName = async (req, res) => {
    try {
        let {genreName} = req.params
        const genre = await Genre.find({genreName:genreName})
        if (!genre) throw Error('Genre not found')
        res.send(genre)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllGenres,
    getGenreByName
};