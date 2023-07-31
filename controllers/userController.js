const { User } = require('../models')

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({user,
        })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch(error) {
        throw error
    }
}


const getUserByName = async (req, res) => {
    try {
        let {id} = req.params
        const userName = await User.find({user:id})
        if (!userName) throw Error('User not found')
        res.send(userName)
    } catch(error) {
        throw error
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByName
};