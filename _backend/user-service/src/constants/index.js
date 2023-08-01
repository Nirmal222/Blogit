const { user, signup, login, logout } = require("./user.routes/user.routes");
const { home } = require("./home.routes/home.routes");
const createMailOptions = require("./nodemailer/mailoptions");
module.exports = { home, user, signup, login, logout, createMailOptions }