const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    passwordConf: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },

});

const User = mongoose.model('user', UserSchema);

module.exports = User;