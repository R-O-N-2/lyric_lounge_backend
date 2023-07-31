const express = require('express');
const router  = express.Router();
const controller = require('../controllers/workController')

router.get('/', controller.getAllWorks);

module.exports = router;