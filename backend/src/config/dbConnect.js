const moongoose = require("mongoose");
require("dotenv");

const connect = ()=>{
    return mongoose.connect(process?.env?.MONGO_URL);
}

module.exports = connect;