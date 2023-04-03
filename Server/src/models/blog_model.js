const mongoose = require("mongoose");
const Blogs = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: "Users",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Blogs", Blogs);
