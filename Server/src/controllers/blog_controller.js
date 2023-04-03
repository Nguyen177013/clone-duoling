const Blog = require("../models/blog_model");

class BlogController {
  async createBlog(req, res) {
    const { title, snippet, body } = req.body;
    const user = await req.user;
    if (!user) {
      res.json({ error: "Please login again!" });
    }
    try {
      const idUser = user._id;
      await Blog.create({ title, snippet, body, user: idUser });
      res.json({ message: "Create Blog successfully" });
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async getAllBlogs(req, res) {
    const allOfBlogs = await Blog.find().populate("user");
    res.json(allOfBlogs);
  }

  async editBlog(req, res) {
    const { _id, title, snippet, body } = req.body;
    const user = await req.user;
    if (!user) {
      return res.json({ error: "Please login again!" });
    }
    const edit = await Blog.findOneAndUpdate(
      { _id },
      { title, snippet, body },
      { new: true }
    );
    return res.json({ message: "chỉnh sửa Blog thành công" });
  }

  async removeBlog(req, res) {
    const { _id } = req.body;
    const user = req.user;
    if (!user) {
      return res.json({ error: "Please login again!" });
    }
    const remove = await Blog.findOneAndRemove({_id});
    return res.json({message : "Xóa Blog thành công"});
}
}

module.exports = new BlogController();
