const crypto = require("crypto");

//Generate aa random secret key
const secretKey = crypto.randomBytes(32).toString();

module.exports = {
  secretKey: secretKey,
};
