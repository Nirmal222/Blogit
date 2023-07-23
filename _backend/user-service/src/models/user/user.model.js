const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    emailToken: { type: String, required : true },
    isVerified: { type: Boolean, },
    date: { type: Date, default: Date.now() },
    role: { type: String, },
    blogs: [ { type: mongoose.Schema.Types.ObjectId, ref: "blog" } ]
})

const UserModel = mongoose.model( "user", userSchema );

module.exports = UserModel;