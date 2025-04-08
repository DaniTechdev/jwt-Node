const express = require("express");
const { login, refreshToken } = require("../controllers/login");

const router = express.Router();

//for cross transform ip allowance to access the route
// router.use(cors());
router.post("/login", login);

router.post("/refresh-token", refreshToken);

module.exports = router;
