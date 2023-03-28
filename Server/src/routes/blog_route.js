const express = require("express");
const BlogRoute = express.Router();
const blogController = require("../controllers/blogs_controller")
const requireAuth = require("../middleware/requireAuth");

BlogRoute.use(requireAuth);

BlogRoute.get('/get-blogs', blogController.getAllBlogs);
BlogRoute.get('/get-blog/:id', blogController.getBlog);
BlogRoute.post('/create-blog', blogController.createBlog);
module.exports = BlogRoute;
