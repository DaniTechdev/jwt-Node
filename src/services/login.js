const User = require("../models/user");
const { verifyToken } = require("../utils/authMiddleware");

const bcrypt = require("bcryptjs");

const { generateToken } = require("../utils/jwtUtils");

async function login(email, password) {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error("User not found");
    }

    const isPasswordValid = bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      throw new Error("Incorrect Password");
      return null;
    }

    const token = generateToken(existingUser);

    return token;
  } catch (error) {
    console.log("Login error", error.message);

    throw new Error("Invalid credentials");
  }
}

async function refreshingToken(oldToken) {
  try {
    const decodedToken = verifyToken(oldToken);

    const user = User.findById(decodedToken._id);
    if (!user) {
      throw new Error("User not found");
    }

    const newToken = generateToken(user);
    return newToken;
  } catch (error) {
    console.log("Refresh token error", error.message);
    throw new Error("Invalid token");
  }
}
module.exports = {
  login,
  refreshingToken,
};
