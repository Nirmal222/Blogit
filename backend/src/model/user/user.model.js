const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    blogs: [ { type: mongoose.Schema.Types.ObjectId, ref: "blog" } ],
})

const User = mongoose.model("user",userSchema);

module.exports = User;

