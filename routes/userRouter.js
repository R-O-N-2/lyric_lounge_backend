const express = require('express');
const router  = express.Router();
const controller = require('../controllers/userController')

//Get Users
router.get('/', controller.getAllUsers);
router.get('/username/:username', controller.getUserByName)

//Create User
router.post('/signup', controller.createUser);

//Update User
router.put('/:id', controller.updateUser)

//Delete User
router.delete('/:id', controller.deleteUser)


module.exports = router;