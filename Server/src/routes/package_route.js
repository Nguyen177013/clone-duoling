const express = require('express');
const PackageRoute = express.Router();
const packageController = require('../controllers/package_controller');


PackageRoute.get('/', packageController.getAllPackages);

module.exports = PackageRoute;