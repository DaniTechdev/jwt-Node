// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://Danitech:<db_password>@cluster0.glsljpc.mongodb.net/jwt_db"
// );

// mongoose.connection.on("connected", () => {
//   console.log("MongoDB connected successfully");
// });

// mongoose.connection.on("Error", (error) => {
//   console.log(`MongoDB connection error: ${error}`);
// });

// module.exports = mongoose;

const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
