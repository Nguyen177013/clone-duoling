const express = require('express');
const BlogController = require('../controllers/blog_controller');
const requireAuth = require('../middleware/requireAuth');
const BlogRoute = express.Router();

BlogRoute.use(requireAuth);

BlogRoute.post('/createBlog', BlogController.createBlog);
BlogRoute.get('/getBlogs', BlogController.getAllBlogs);
BlogRoute.post('/editBlog', BlogController.editBlog);
BlogRoute.post('/removeBlog', BlogController.removeBlog);

module.exports = BlogRoute;