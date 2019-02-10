// @TODO    WIP

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    created: {
        type: Date,
        default: Date.now
    },
    links: [
        {
            name: {
                type: String,
                minlenght: 2,
                maxlength: 150,
                required: true
            },
            description: {
                type: String,
                required: false,
                maxlength: 150
            },
            url: {
                type: String,
                required: true,
                maxlenght: 200,
            },
            created: {
                type: Date,
                default: Date.now,
                required: true
            },
            modified: {
                type: Date,
                default: Date.now,
                required: true
            }

        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
