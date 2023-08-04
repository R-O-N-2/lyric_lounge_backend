const { User } = require('../models')

// const createUser = async (req, res) => {
//     try {
//         const user = await new User(req.body)
//         await user.save()
//         return res.status(201).json({user,
//         })
//     } catch (error) {
//         return res.status(500).json({error:error.message})
//     }
// }

const createUser = async (req, res) => {
    try {
        const { username, location, contact, password } = req.body
        
        const newUser = new User({
            username, 
            location, 
            contact,
            password
        })
        
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (e) {
        console.log(e)
        res.status(500).send('User creation unsuccessful')
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
        let {username} = req.params
        const userName = await User.find({username:username})
        if (!userName) throw Error('User not found')
        res.send(userName)
    } catch(error) {
        throw error
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params
        let user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        } 
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User has been deleted.")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByName,
    updateUser,
    deleteUser

};