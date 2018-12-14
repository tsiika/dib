// @TODO    WIP

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = require("./User");

const LinkSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
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
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserSchema"
        }
    ],
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

const Link = mongoose.model("link", LinkSchema);

module.exports = Link;
