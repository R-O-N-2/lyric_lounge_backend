const express = require('express');
const router  = express.Router();
const controller = require('../controllers/workController').default

router.get('/', controller.getAllWorks);

module.exports = router