const blogsModel = require('../models/blog_model');

class BlogController {
    async getAllBlogs(req, res) {
        const data = await blogsModel.find();
        res.json({ blogs: data });
    }
    async getBlog(req, res) {
        const blogId = req.params.id;
        const data = await blogsModel.findById(blogId);
        res.json(data);
    }
    async createBlog(req, res) {
        const { title, snippet, body } = req.body;
        const user = await req.user;
        if (!user) {
            res.status(401).json({ error: "Please login before creating blog" });
        }
        try {
            const blogUser = {
                userId: user._id,
                userName: user.username,
            }
            console.log(blogUser);
            await blogsModel.create({ title, snippet, body, user:blogUser });
            res.json({ mssg: "Blog has been created" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async removeBlog(req, res){
        const blogId = req.params.id;
        try{
            await blogsModel.findByIdAndRemove(blogId);
            res.status(200).json({ mssg: "Blog has been deleted" });
        }
        catch(err){
            res.status(406).json({ error: err.message });
        }
    }
}

module.exports = new BlogController;