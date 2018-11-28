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

/*
UserSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if(err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if(err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
*/
const User = mongoose.model("user", UserSchema);

module.exports = User;
