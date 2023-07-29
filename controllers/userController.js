const User = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch(error) {
        throw error
    }
}

module.exports = {
    getAllUsers
}