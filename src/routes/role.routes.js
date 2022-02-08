const role = require('express').Router();
const roleController = require('../controllers/role.controller');

role.get("/", roleController.roleFetcher);
role.post("/create", roleController.roleCreator);


module.exports = role;