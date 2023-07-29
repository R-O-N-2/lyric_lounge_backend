const express = require('express');
const router  = express.Router();
const controller = require('../controllers/genreController')

router.get('/', controller.getAllGenres);

module.exports = router