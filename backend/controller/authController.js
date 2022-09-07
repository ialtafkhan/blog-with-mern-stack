const user = require("../modal/userModal")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.login = async (req, res,) => {

    try {
        const { email, password } = req.body;
        const result = await user.findOne({ email })
        if (!result) {
            return res.status(401).json({
                success: false,
                mesaage: "email not found"
            })
        }
        // console.log(result);
        const verify = await bcrypt.compare(password, result.password);
        if (!verify) {
            return res.status(401).json({
                success: false,
                message: "PASSWORD DO NOT MATCH ",
            });
        }
        // console.log(verify);

        const token = jwt.sign({ id: result._id }, process.env.SECERET_KEY)
        // console.log("token");
        // console.log(token);
        // console.log("token");
        return res.status(200).json({
            success: true,
            mesaage: "user login suucessfuly",
            result: {
                token,
                email: email,
                userName: result.userName,
                isAdmin: result.isAdmin,
                mobile: result.mobile,
                profile: result.image

            }
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            mesaage: "something worng",

        })

    }

}