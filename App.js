const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Signup");
require('dotenv').config()
const signupRoute = require("./routes/signUpRoute");
const PORT = process.env.PORT || 4000
app.use(express.json());

app.use("/", signupRoute);

app.use('/get', (req, res) => {
  try {
    const data = "hello this is example"
    return res.send({ success: true, message: data })
  } catch (error) {
    return res.send({ success: false, message: 'something went worng' })
  }
})

app.listen(PORT, () => {
  console.log("Server is working");
});
