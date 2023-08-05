// required models 
const { UserModel, } = require("../../models/index");
// required modules
const crypto = require("crypto")
const bcrypt = require("bcrypt");
// required utilities
const { createToken, transporter } = require("../../utils/index");
const { createMailOptions } = require("../../constants");

const usersignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new UserModel({
            name,
            email,
            password,
            emailToken: crypto.randomBytes(64).toString('hex'),
            isVerified: false
        })
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
        const newUser = await user.save();

        //send verification mail to user
        // transporter.sendMail(createMailOptions("gurajadanirmalkumar@gmail.com", "Hey this is your verification mail"), function (error, info) {
        //     if (error) {
        //         console.log(error)
        //     } else {
        //         console.log("Verifications email is sent to your gmail account.")
        //     }
        // })
        res.send({
            message: "User Created Successfullt",
            userDetails: newUser,
        })
    } catch (err) {
        console.log("Error is:", err);
        res.send()
    }
}

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await UserModel.findOne({ email: email });
        console.log(findUser, "finUser")
        if (findUser) {
            const match = await bcrypt.compare(password, findUser.password);
            const token = createToken(findUser?.id);
            // res.cookie("access-token", token);
            if (match) {
                res.status(200).send({
                    message: "user logged in successfully",
                    token: token,
                })
            }else {
                res.status(401).send({ message: "User Credentials Wrong" });
            }
        }
    } catch (err) {
        console.log("Error is:", err);
        return res.status(404).send("Authentication Error");
    }
}

const userlogout = async (req, res) => {
    // Assuming you are using JWT as a cookie named 'access-token'
    const token = req.cookies['access-token'];

    if (!token) {
        return res.status(401).json({ message: 'No token found.' });
    }

    // Add the token to the blacklist (you would typically store this in a database)
    // You can use a more sophisticated mechanism like Redis for better performance
    // Here, we are using an array as a simple example:
    // blacklistedTokens.push(token);

    // For demonstration purposes, we're just sending a success response here
    res.json({ message: 'Logged out successfully.' });
}

const userDetails = async (req, res) => {
    try {

        // Fetch the user from the database based on the extracted user ID
        const user = await UserModel.findOne({ name: req.body.name });
        console.log(user, req)
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // You might want to exclude sensitive data like password before sending the response
        const userProfile = {
            username: user.name,
            email: user.email,
            // ... other user properties you want to include in the profile
        };

        res.json(userProfile);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
}

const userUpdate = async (req, res) => {
    try {
        const username = req?.body?.name;
        const updatedUser = await UserModel.update({ name: username }, { $set: { email: req.body.newMail } })
        return res.status(200).json({ message: "Updated User Sucessfully", user: updatedUser })
    } catch (err) {
        res.status(400).send("Sorry could not perform operation")
    }
}


module.exports = { usersignup, userlogin, userlogout, userDetails, userUpdate };