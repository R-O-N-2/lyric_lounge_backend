const express = require('express');
const router  = express.Router();
const controller = require('../controllers/workController')

//Get Works
router.get('/', controller.getAllWorks);
router.get('/:title', controller.getWorkByTitle)


//Create
router.post('/', controller.createWork)

//Update
router.put('/:id', controller.updateWork)


//Delete
router.delete('/:id', controller.deleteWork)
module.exports = router;