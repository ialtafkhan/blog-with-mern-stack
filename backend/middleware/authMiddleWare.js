const JWT = require("jsonwebtoken")

exports.loginOnly = async (req, res, next) => {
    try {

        const token = req.headers.authorization
        // console.log("token");
        // console.log(token);
        // console.log(token);

        if (!token) {
            return res.status(401).json({
                sucess: false,
                message: "Token not passed"
            })
        }

        const { id } = JWT.verify(token, process.env.SECERET_KEY)
        // console.log(id);
        if (!id) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Token'

            })
        }

        req.body.userId = id;
        // console.log(req.body.userId);
        // console.log(id);
        next();

    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Unauthorized access"

        })
    }

}