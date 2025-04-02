const User = require("../models/user");

const bcrypt = require("bcryptjs");

async function creaateAdminAccount() {
  try {
    //check if admin has been created before

    const existingAdmin = await User.findOne({ email: "tochidan11@gmail.com" });
    // const salt = bcrypt.genSaltSync(10);
    // const hashPassword = bcrypt.hashSync(password, salt);
    if (!existingAdmin) {
      const newAdmin = new User({
        name: "Admin Dan",
        email: "tochidan11@gmail.com",
        password: bcrypt.hashSync("Admin", bcrypt.genSaltSync(10)),
        role: "admin",
      });

      await newAdmin.save();

      console.log("Admin account created successfully");
    } else {
      console.log("Admin already exist");
    }
  } catch (error) {
    console.log("Error in creating admin account", error.message);
    console.error(error.message);
  }
}

module.exports = creaateAdminAccount;
