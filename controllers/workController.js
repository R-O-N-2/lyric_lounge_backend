const { Work, User, Genre }  = require('../models')

// const createWork = async (req, res) => {
//     try {
//         const work = new Work(req.body)
//         await work.save()
//         return res.status(201).json({
//             work,
//         })
//     } catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }

const createWork = async (req, res) => {
      const newWork = await Work.create({
        user: req.body.username,
        title: req.body.title,
        genre: req.body.genre,
        content: req.body.content
     })
     res.json(newWork)
    }
//       const savedWork = await work.save();
//       return res.status(201).json(savedWork);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   };

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

const getWorksByUsername = async (req, res) => {
    try {
        let {username} = req.params
       
        const user = await User.findOne({username : username})
        const works = await Work.find({user: user._id})
        
        if (!works) throw Error('No works found')
        res.status(200).json(works)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getWorksByGenre = async (req, res) => {
    try {
        let {genreName} = req.params
       
        const genre = await Genre.findOne({genreName : genreName})
        const works = await Work.find({genre: genre._id})
    
        if (!works) throw Error('No works found')
        res.status(200).json(works)
    } catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    createWork,
    getAllWorks,
    getWorkByTitle,
    updateWork,
    deleteWork,
    getWorksByUsername,
    getWorksByGenre
};
