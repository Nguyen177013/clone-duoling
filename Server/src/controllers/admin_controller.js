const Admin = require("../models/admin_model");
class AdminController {
  async signupAdmin(req, res) {
    const { username, signature } = req.body;
    const admin = await Admin.signup(username, signature);
    res.json(admin);
  }
  async signinAdmin(req, res) {
    const { username, signature } = req.body;
    const admin = await Admin.signin(username, signature);
    res.json(admin);
  }
}
module.exports = new AdminController();
