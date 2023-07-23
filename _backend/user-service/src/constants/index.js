const { user, signup, login } = require("./user.routes/user.routes");
const { home } = require("./home.routes/home.routes");
module.exports = { home, user, signup, login }