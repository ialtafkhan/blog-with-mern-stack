const blog = require("../modal/blogModal")
const fs = require("fs")

exports.addNewBlog = async (req, res) => {

    try {
        // console.log(req.body);
        const result = await blog.create(req.body)
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "blog added succesfuly",
            result
        })
        // console.log("xxxxxxxxxxxxxxxxxxxxxx");
        // console.log(result)
        // console.log("xxxxxxxxxxxxxxxxxxxxxx");

    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong" + error,

        })

    }
}

exports.getAllBlog = async (req, res) => {

    try {
        const result = await blog.find(req.body)

        res.status(200).json({
            count: result.length,
            success: true,
            message: "  blog get succesfuly",
            result
        })
        console.log(result);

    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}
exports.getSingleBlog = async (req, res) => {

    try {
        const result = await blog.findById(req.params.id, req.body)

        res.status(200).json({
            success: true,
            message: "  blog get succesfuly",
            result
        })


    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}


exports.updateBlog = async (req, res) => {

    try {
        if (req.body.image !== "undefined") {
            const { image } = await blog.findById(req.params.id)
            console.log(image);
            fs.unlinkSync(`public/${image}`)

        } else {
            delete req.body.image
        }
        const result = await blog.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            success: true,
            message: " t blog updated succesfuly",
            result
        })


    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}




exports.deleteSingleBlog = async (req, res) => {

    try {
        const result = await blog.findByIdAndDelete(req.params.id, req.body)

        res.status(200).json({
            success: true,
            message: " blog deleted succesfuly",
            result
        })


    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}

exports.deleteAllBlog = async (req, res) => {

    try {
        const result = await blog.deleteMany()

        res.status(200).json({
            success: true,
            message: "  blog deleted succesfuly",
            result
        })


    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}
exports.getMyBlog = async (req, res) => {

    try {
        const result = await blog.find({ userId: req.body.userId })

        res.status(200).json({
            count: result.length,
            success: true,
            message: "  get user blog succesfuly",
            result
        })
        // console.log(result);

    } catch (error) {
        res.status(200).json({
            success: false,
            message: "something wrong",

        })

    }
}
