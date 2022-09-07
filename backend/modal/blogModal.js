const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },

    heading: {
        type: String,
        required: true
    },

    subHeading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "upload/blog.png"
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    blogType: {
        type: String,
        default: "education",
        enum: [
            "education",
            "science",
            "nature",
            "fitness",
            "sports",
            "nature",
            "animals",
            "agriculture"
        ]
    }

    // blogType: { type: String, required: true }


}, { timestamps: true }
)

module.exports = mongoose.model("blogs", blogSchema)