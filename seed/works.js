const db = require('../db')
const Work = require('../models/work')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const works = [
        {
            title: 'ABC',
            genre: 'other',
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