// const multer = require("multer")
// const path = require("path")


// const storage = multer.diskStorage({

//     destination: function (cb, file, req) {
//         cb(null, "public/upload")

//     },
//     filename: function (cb, file, req) {

//         const ext = path.extname(file.originalname)
//         const fn = "user-" + Date.now() + ext

//         req.body.image = `upload/${fn}`
//         cb(null, fn)

//     }

// })

// exports.upload = multer({ storage })



const multer = require("multer")
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/upload")
        // cb(null, path.join(__dirname, "public/upload"))
    },
    filename: function (req, file, cb) {
        // console.log(file);
        // console.log(Date.now());
        // const fn = Date.now() + file.originalname
        // console.log(fn);

        const ext = path.extname(file.originalname)
        console.log(ext);
        const fn = "user-" + Date.now() + ext
        // const fn = Math.floor(Math.random() * 10)
        console.log(fn);
        req.body.image = `upload/${fn}`
        cb(null, fn)
    }
})

exports.upload = multer({ storage })





