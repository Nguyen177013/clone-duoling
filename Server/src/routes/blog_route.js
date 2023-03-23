const express = require("express");
const BlogRoute = express.Router();
const blogController = require("../controllers/blogs_controller")
const requireAuth = require("../middleware/requireAuth");

BlogRoute.use(requireAuth);

BlogRoute.post('/get-blogs', blogController.getAllBlogs);
BlogRoute.post('/create-blog', blogController.createBlog);
module.exports = BlogRoute;
