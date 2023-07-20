const generateOTP = require("./otp-generator/otp.generator");
const transporter = require("./nodemailer/transporter.js");
module.exports = {generateOTP, transporter, };