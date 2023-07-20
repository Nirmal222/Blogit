const mongoose = require("mongoose");

const OtpSchema = mongoose.Schema({
    otp: { type: String },
    generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
}, { timstamps: true })

const Otp = mongoose.model("otp", OtpSchema);

module.exports = Otp;