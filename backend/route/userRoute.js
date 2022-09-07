const express = require("express")
const { login } = require("../controller/authController")
const {
    registerUser,
    getAlluser,
    deleteuser,
    deleteSingleUser,
    updateSingleUser,
    userIsAdmin
} = require("../controller/userController")
const { upload } = require("../middleware/upload")


const router = express()

router.route("/").get(getAlluser)
router.route("/").delete(deleteuser)
router.route("/auth/login").post(login)


router.route("/register").post(upload.single("image"), registerUser)
router.route("/delete/:id").delete(deleteSingleUser)
router.route("/update-user/:id").put(updateSingleUser)

router.route("/isAdmin/:id").put(userIsAdmin)

module.exports = router

