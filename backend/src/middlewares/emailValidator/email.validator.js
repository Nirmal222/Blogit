const validator = require("validator");

// Email Validation middleware
function validateEmail(req, res, next) {
    console.log(req,"req");
    try {
        const email = req.body.email;

        if (validator.isEmail(email)) {
            // If the email is valid, store it in the request object for later use (optional)
            req.validatedEmail = email;
            next()
        } else {
            return res.status(400).send({ error: "Invalid email" })
        }
    }catch(error){
        return res.status(400).send("Error is:",error);
    }
}

module.exports = validateEmail;