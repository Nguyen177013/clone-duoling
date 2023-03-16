const express = require('express');
const PackageRoute = express.Router();
const packageController = require('../controllers/package_controller');


PackageRoute.post('/createPackage', packageController.createPackage);
PackageRoute.post('/addLevel', packageController.addLevel);
PackageRoute.get('/getLevels', packageController.getLevel);
module.exports = PackageRoute;