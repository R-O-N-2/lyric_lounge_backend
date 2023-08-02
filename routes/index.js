const { Router } = require('express');
const router = Router();
const userRouter = require('./userRouter')
const workRouter = require('./workRouter')
const genreRouter = require('./genreRouter')

router.get('/', (req, res) => {
    res.send({ msg: 'server is running' })
  })

//Users 
router.use('/users', userRouter)

//Works
router.use('/works', workRouter)

//Genres
router.use('/genres', genreRouter)


module.exports = router