const { error } = require("console");
const Teacher = require("../models/teacher");
const asyncHandler = require("express-async-handler");

const authUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body;
  const teacher = await Teacher.findOne({ email });

  if (!teacher) {
    return res.status(401).send({ message: "Invalid email or password" });
  }

  const isMatch = teacher.password === password;

  if (!isMatch) {
    return res.status(401).send({ message: "Invalid username or password" });
  } else {
    res.status(200).send({ message: "user logged in" });
  }
});

module.exports = {authUser};