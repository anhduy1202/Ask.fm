const authController = require("../controllers/authController");

const route = require("express").Router();

//REGISTER
route.post("/register", authController.registerUser);

//LOG IN
route.post("/login", authController.loginUser);

module.exports = route;