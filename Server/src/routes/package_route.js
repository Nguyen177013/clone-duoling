const express = require("express");
const PackageRoute = express.Router();
const packageController = require("../controllers/package_controller");
const requireAuth = require("../middleware/requireAuthAdmin");

// PackageRoute.use(requireAuth);

PackageRoute.post(
  "/createPackage",
  requireAuth,
  packageController.createPackage
);
PackageRoute.post("/addLevel", requireAuth, packageController.addLevel);
PackageRoute.get("/getLevels", packageController.getLevel);
module.exports = PackageRoute;
