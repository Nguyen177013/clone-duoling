const jwt = require("jsonwebtoken");
const AdminModel = require("../models/admin_model");
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "Invalid authorization" });
  }
  const token = authorization.split(" ")[1];
  try {
    const id = jwt.verify(token, process.env.TOKENSECRET);
    req.admin = await AdminModel.findOne({ _id: id }, { _id: 1 });
    next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};
module.exports = requireAuth;
