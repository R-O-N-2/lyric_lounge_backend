const { Router } = require('express');
const router = Router();
const userRouter = require('./userRouter')
const workRouter = require('./workRouter')
const genreRouter = require('./genreRouter')

router.get('/', (req, res) => {
    res.send({ msg: 'server is running' })
  })
  
router.use('/users', userRouter)
router.use('/works', workRouter)
router.use('/genres', genreRouter)

module.exports = router