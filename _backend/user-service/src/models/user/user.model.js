const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, },
    blogs: [ { type: mongoose.Schema.Types.ObjectId, ref: "blog" } ]
})

const UserModel = mongoose.model( "user", userSchema );

module.exports = UserModel;