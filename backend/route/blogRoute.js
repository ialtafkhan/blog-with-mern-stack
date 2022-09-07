

const express = require("express")
const {
    updateBlog,
    getMyBlog,
    deleteSingleBlog,
    getSingleBlog,
    deleteAllBlog,
    getAllBlog,
    addNewBlog,
} = require("../controller/blogController")
const { loginOnly } = require("../middleware/authMiddleWare")
const { blog } = require('../middleware/blog')


const router = express.Router()



router.route("/").get(getAllBlog)
router.route("/").delete(loginOnly, deleteAllBlog)


router.route("/addblog").post(blog.single("image"), loginOnly, addNewBlog)
router.route("/sigleblog/:id").get(getSingleBlog)

router.route("/my/blog").get(loginOnly, getMyBlog)

router.route('/updateblog/:id').put(blog.single("image"), loginOnly, updateBlog)
router.route('/deleteblog/:id').delete(loginOnly, deleteSingleBlog)


module.exports = router
