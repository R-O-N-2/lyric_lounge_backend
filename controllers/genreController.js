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
        let {name} = req.params
        const genreName = await Genre.find({genre:name})
        if (!genreName) throw Error('Genre not found')
        res.send(genreName)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllGenres,
    getGenreByName
};