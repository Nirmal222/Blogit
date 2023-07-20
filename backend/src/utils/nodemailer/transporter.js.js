const nodemailer = require('nodemailer');
// dotenv 
require('dotenv').config();
// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nirmalkumargurajada@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
});

module.exports = transporter;