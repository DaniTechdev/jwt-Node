const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig");

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "unauthorized missing token" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer != "Bearer" || !token) {
    return res.status(401).json({ message: "unauthorized invalid token" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden:Invalid Token" });
    }
    req.user = user;
    next();
  });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { authenticateToken, verifyToken };
