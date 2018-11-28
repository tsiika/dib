const mongoose = require("mongoose");
const LinkSchema = require("./Link");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    link: {
        type: Schema.Types.ObjectId,
        ref: "LinkSchema"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
