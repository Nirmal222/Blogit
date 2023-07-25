const createMailOptions = (email, subject) => {
    return mailOptions = {
        from: '"Veriffy your email"<nirmalkumargurajada@gmail.com>',
        to: email,
        subject: 'codewithsid -verify your email'
    }
}

module.exports = createMailOptions;