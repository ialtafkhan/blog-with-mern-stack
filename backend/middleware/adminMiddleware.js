const user = require("../modal/userModal")
const JWT = require("jsonwebtoken")

exports.adminOnly = async (req, res, next) => {

    try {

        const token = req.headers.authorization

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "no token  passs\ "

            })
        }
        // const verify= JWT.verify(token,process.env.SECERET_KEY)
        cosnt = verify = JWT.verify(token, process.env.SECERET_KEY)
        if (!verify) {
            return res.status(400).json({
                success: false,
                message: "invlaid token"

            })
        }

        const result = await user.findOne(id)
        if (!result.isAdmin) {
            return res.status(401).json({
                success: false,
                message: "NOT AN ADMIN : Unautherized Access",
            });
        }

        next();


    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unautherized Access",
        });

    }

}