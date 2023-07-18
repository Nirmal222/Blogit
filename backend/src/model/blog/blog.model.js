const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
    title: { type: String, required: true, unique: true },
    description: { type: String, },
    likes: { type: Number, },
    likedBy: [ { type: mongoose.Schema.Types.ObjectId, ref:"user" } ],
    comments: [  ]
})