const { user, signup, login, logout, details } = require("./user.routes/user.routes");
const { home } = require("./home.routes/home.routes");
const createMailOptions = require("./nodemailer/mailoptions");
module.exports = { home, user, signup, login, logout, details, createMailOptions }