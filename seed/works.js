const db = require('../db')
const { Work, Genre, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = await User.find()
    const genres = await Genre.find()
    const works = [
        {
            user: users[0]._id,
            title: 'ABC',
            genre: genres[0]._id,
            content: 'ABC, 123..'
        }
    ]
    
    await Work.insertMany(works)
    console.log("Created some works!")
}
const run = async () => {
    await main()
    db.close()
}

run()