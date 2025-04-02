const User = require("../models/user");

const bcrypt = require("bcryptjs");

async function creaateAdminAccount(user) {
  try {
    //check if admin has been created before

    const existingAdmin = await User.findOne({ email: "tochidan@gamil.com" });
    // const salt = bcrypt.genSaltSync(10);
    // const hashPassword = bcrypt.hashSync(password, salt);
    if (!existingAdmin) {
      const newAdmin = new User({
        email: "tochidan11@gmail.com",
        name: "Admin Dan",
        password: bcrypt.hashSync("Admin", bcrypt.genSaltSync(10)),
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

modules.exports = creaateAdminAccount;
