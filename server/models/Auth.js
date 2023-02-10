const { Schema } = require('mongoose');

const authSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    user: {
        ref: 'User'
    }
})

module.exports = authSchema;