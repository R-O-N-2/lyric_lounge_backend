const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            username: 'ron',
            location: 'Tampa, Fl',
            contact: 'ron@lyric_lounge',
            password: 'ron'
        }
    ]
    
    await User.insertMany(users)
    console.log("Got some users!")
}
const run = async () => {
    await main()
    db.close()
}

run()