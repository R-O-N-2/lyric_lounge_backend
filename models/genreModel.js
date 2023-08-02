const { Schema } = require('mongoose')

const Genre = new Schema(
    {
       genreName: { type: String, required: true}
    }
)


module.exports = Genre