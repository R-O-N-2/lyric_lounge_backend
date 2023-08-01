const { Work }  = require('../models')

const createWork = async (req, res) => {
    try {
        const work = await new Work(req.body)
        await work.save()
        return res.status(201).json({
            work,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllWorks = async (req, res) => {
    try {
        const works = await Work.find()
        res.send(works)
    } catch(error) {
        throw error
    }
}

const updateWork = async (req, res) => {
    try {
        let { id } = req.params
        let work = await Work.findByIdAndUpdate(id, req.body, {new: true})
        if (work) {
            return res.status(200).json(work)
        } 
        throw new Error('Work not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getWorkByTitle = async (req, res) => {
    try {
        let {title} = req.params
        const workTitle = await Work.find({title:title})
        if(!workTitle) throw Error ('Work not found')
        res.send(workTitle)
    } catch(error) {
        throw error
    }
}

const deleteWork = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Work.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Work has been deleted.")
        }
        throw new Error("Work not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    createWork,
    getAllWorks,
    getWorkByTitle,
    updateWork,
    deleteWork,
};
