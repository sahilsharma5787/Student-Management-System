const sign = require("../models/sign");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the fields carefully!!"
            })
        }

        let user = await sign.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not exists!!!!"
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
        };
        if (await bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload, process.env.KEY, { expiresIn: "2h" });
            const options = {
                expire: new Date(Date.now() + 3*24*60*60*1000 ),
                httpOnly:true,
            };
            res.cookie("token" , token , options).status(200).json({
                success:true,
                token,
                user,
                message:"Successfully!!!"
            })
        } else {
            return res.status(403).json({
                success: false,
                message: "Password is incorrect!!!"
            })
        }


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}