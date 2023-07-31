const { Work }  = require('../models')

const getAllWorks = async (req, res) => {
    try {
        const works = await Work.find()
        res.send(works)
    } catch(error) {
        throw error
    }
}

const getWorkByTitle = async (req, res) => {
    try {
        let {title} = req.params
        const workTitle = await Work.find({work:title})
        if(!workTitle) throw Error ('Work not found')
        res.send(workTitle)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllWorks,
    getWorkByTitle
};
