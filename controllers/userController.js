const { User } = require('../models')

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
    getAllUsers,
    getUserByName
};