const express = require('express');
const PackageRoute = express.Router();
const packageController = require('../controllers/package_controller');


PackageRoute.get('/', packageController.getAllPackages);
PackageRoute.post('/createPackage', packageController.createPackage);
PackageRoute.post('/addLevel', packageController.addLevel);
module.exports = PackageRoute;