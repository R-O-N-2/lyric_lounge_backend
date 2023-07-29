const Work  = require('../models/work')

const getAllWorks = async (req, res) => {
    try {
        const works = await Work.find()
        res.send(works)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllWorks
}