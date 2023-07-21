const nodemailer = require('nodemailer');
    // dotenv 
    require('dotenv').config();
// Nodemailer setup
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: "shania26@ethereal.email",
      pass: "2Te2n8GqP123B4YhAM",
    },
});

module.exports = transporter;