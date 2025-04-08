const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig");

function generateToken(user) {
  //creaate a header object/payload

  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

module.exports = {
  generateToken,
};
