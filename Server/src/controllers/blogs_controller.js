const blogsModel = require('../models/blog_model');

class BlogController {
    async getAllBlogs(req, res) {
        const data = await blogsModel.find();
        res.json({ blogs: data });
    }
    async createBlog(req, res) {
        const { title, snipet, body } = req.body;
        const userId = req.user;
        if (!userId) {
            res.status(401).json({ error: "Please login before creating blog" });
        }
        try {
            await blogsModel.create({ title, snipet, body });
            res.json({ mssg: "Blog has been created" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
        res.json({ title, snipet, body });
    }
}

module.exports = new BlogController;