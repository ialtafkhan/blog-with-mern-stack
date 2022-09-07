

const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')

    },
    filename: function (req, file, cb) {

        const ext = path.extname(file.originalname)
        const fn = 'blog-' + Date.now() + ext;
        req.body.image = `upload/${fn}`

        cb(null, fn)
    }

})

exports.blog = multer({ storage })