const express = require('express');
const PackageRoute = express.Router();
const packageController = require('../controllers/package_controller');


PackageRoute.get('/getPackage', packageController.getAllPackages);
PackageRoute.post('/createPackage', packageController.createPackage);
PackageRoute.post('/addLevel', packageController.addLevel);
module.exports = PackageRoute;