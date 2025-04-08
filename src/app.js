require("dotenv").config(); // Must be at the top

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/users");

const mongoose = require("mongoose");
const connectDB = require("./configuration/dbConfig");

const creaateAdminAccount = require("./scripts/admin");

const app = express();

connectDB(
  "mongodb+srv://Danitech:33541712@cluster0.glsljpc.mongodb.net/jwt_db"
);

creaateAdminAccount();

const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//We will always call the createdAdminAaccount anytime the projet runs

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);
app.use("/api", loginRoute);

app.listen(PORT, async () => {
  try {
    await connectDB(
      "mongodb+srv://Danitech:33541712@cluster0.glsljpc.mongodb.net/jwt_db"
    );

    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error.message);
  }
  //   mongoose
  //     .connect(process.env.MONGO_URI, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then(() => console.log("Connected to db successfully"))
  //     .catch((err) => console.log(err));
  console.log(`Server is running on : http://localhost:${PORT}`);
});
