const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 150
    },
    description: {
        type: String,
        required: false,
        maxlength: 150
    },
    url: {
        type: String,
        required: true,
        maxlength: 200
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

const Link = mongoose.model('link', LinkSchema);

module.exports = Link;