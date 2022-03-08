const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Signup");

const signupRoute = require("./routes/signUpRoute");

app.use(express.json());

app.use("/", signupRoute);

app.listen(3001, () => {
  console.log("Port is working");
});
