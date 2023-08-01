const express = require('express');
const router  = express.Router();
const controller = require('../controllers/genreController')

router.get('/', controller.getAllGenres);
router.get('/:genreName', controller.getGenreByName);

module.exports = router;

