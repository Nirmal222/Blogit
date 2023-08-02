const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "nirmalkumargurajada@gmail.com",
        pass: "**(())12345nN"
    },
    rejectUnauthorized: false
})

module.exports = transporter;