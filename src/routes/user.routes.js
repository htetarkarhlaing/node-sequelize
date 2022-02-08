const user = require('express').Router();
const userController = require('../controllers/user.controller');

user.get("/", userController.userFetcher);
user.post("/create", userController.userCreator);


module.exports = user;