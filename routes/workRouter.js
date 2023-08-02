const express = require('express');
const router  = express.Router();
const controller = require('../controllers/workController')

//Get Works
router.get('/', controller.getAllWorks);
router.get('/title/:title', controller.getWorkByTitle)
router.get('/username/:username', controller.getWorksByUsername)
router.get('/genreName/:genreName', controller.getWorksByGenre)


//Create
router.post('/', controller.createWork)


//Update
router.put('/:id', controller.updateWork)


//Delete
router.delete('/:id', controller.deleteWork)

module.exports = router;