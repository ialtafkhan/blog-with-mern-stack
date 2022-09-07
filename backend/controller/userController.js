const user = require("../modal/userModal")
const bcrypt = require("bcryptjs")


exports.registerUser = async (req, res) => {

    try {
        const { password } = req.body
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt)
        const result = await user.create(req.body);

        res.status(200).json({
            success: true,
            message: "user added successfuly",
            result
        })

        console.log(result);
    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}

exports.getAlluser = async (req, res) => {

    try {
        const result = await user.find();

        res.status(200).json({
            count: result.length,
            success: true,
            message: "user get successfuly",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}


exports.deleteuser = async (req, res) => {
    try {
        const result = await user.deleteMany();

        res.status(200).json({
            success: true,
            message: "user deleted successfuly",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}
exports.deleteSingleUser = async (req, res) => {
    try {
        const result = await user.findByIdAndDelete(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "user deleted successfuly",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}

exports.updateSingleUser = async (req, res) => {
    try {
        const result = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            success: true,
            message: "user updated successfuly",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}


exports.userIsAdmin = async (req, res) => {
    try {
        const result = await user.findByIdAndUpdate(req.params.id, { isAdmin: req.body.isAdmin }, { new: true });

        res.status(200).json({
            success: true,
            message: "user is admin now successfuly",
            result
        })


    } catch (error) {

        res.status(400).json({
            success: false,
            message: "something wrong",

        })
    }

}



