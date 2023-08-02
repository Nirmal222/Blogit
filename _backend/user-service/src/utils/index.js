const { createToken, } = require("./jwt/jwt");
const transporter = require("./nodemailer/nodemailer");
module.exports = { createToken, transporter };