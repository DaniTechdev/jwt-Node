const express = require("express");
const signupController = require("../controllers/signup");

const router = express.Router();
// Route for creating a new user

router.post("/register", signupController.createUser);

module.exports = router;
