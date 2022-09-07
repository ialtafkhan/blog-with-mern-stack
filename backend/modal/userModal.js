const mongoose = require("mongoose")


const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "upload/default.png"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },


}, { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)