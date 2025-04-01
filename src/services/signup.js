const User = require("../models/user");

const bcrypt = require("bcryptjs");

async function createUser(userData) {
  const { name, email, password } = userData;

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  console.log("salt", salt);
  console.log("hashPassword", hashPassword);

  const createUser = new User({
    name,
    email,
    password: hashPassword,
    role: "customer",
  });

  const savedUser = await createUser.save();
  return savedUser;
}

module.exports = {
  createUser,
};
