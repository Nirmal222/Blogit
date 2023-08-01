const mongoose = require("mongoose");

const blToken = new mongoose.Schema({
    token: { type: String },
    tokenBlacklistedBy: { type: mongoose.Schema.Types.ObjectId },
}, { timestamps: true });

const BlToken = mongoose.model("blToken",blToken );

module.exports = BlToken

