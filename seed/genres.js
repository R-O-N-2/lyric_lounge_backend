const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connnection error:'))

const main = async () =>  {
    const genres = [
        {
            genreName: 'pop'
        },

        {
            genreName: 'hip-hop'
        },

        {
            genreName: 'rock'
        },

        {
            genreName: 'other'
        }
    ]

    await Genre.insertMany(genres)
    console.log("Created some genres!")
}
const run = async () => {
    await main()
    db.close()
}

run()