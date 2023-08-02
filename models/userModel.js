const { Schema } = require('mongoose')

const User = new Schema(
    {
        username: { type: String, required: true },
        location: { type: String, required: true },
        contact: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = User