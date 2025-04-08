const express = require("express");
const userController = require("../controllers/users");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

router.get("/users", authMiddleware.authenticateToken, userController.getUsers);

module.exports = router;
