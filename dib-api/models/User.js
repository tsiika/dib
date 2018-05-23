const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Link = mongoose.model('user', UserSchema);

module.exports = User;