const { error } = require("console");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const userExist = await User.findOne({ enrollment: req.body.enrollment });
    if (userExist) {
      if (!Object.keys(userExist).includes("password")) {
        Object.keys(req.body).forEach((key) => {
          if (req.body[key]) {
            userExist[key] = req.body[key];
          }
        });
        await userExist.save();

        return res.status(201).send({
          id: userExist._id,
          name: userExist.name,
          enrollment: userExist.enrollment,
          class: userExist.class,
          branch: userExist.branch,
          img: userExist.img,
          phone: userExist.phone,
          email: userExist.email,
          message: "User created successfully",
        });
      } else {
        return res
          .status(409)
          .send({ message: "User with given enrollment already exists!" });
      }
    } else {
      return res.status(409).send({ message: "User Not Allowed" });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

const searchUser = asyncHandler(async (req, res) => {
  try {
    console.log(req.params.enrollment);
    const userExist = await User.findOne({ enrollment: req.params.enrollment });
    console.log(userExist);
    if (userExist?.password) {
      return res
        .status(409)
        .send({ message: "User with given enrollment already Exist!" });
    } else if (userExist) {
      return res.status(200).send({ email: userExist.email });
    } else {
      return res.status(409).send("You are not allowed");
    }
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { password, enrollment } = req.body;
  const user = await User.findOne({ enrollment });

  if (!user) {
    return res.status(401).send({ message: "Invalid username or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).send({ message: "Invalid username or password" });
  } else {
    res.status(200).send({
      id: user._id,
      name: user.name,
      enrollment: user.enrollment,
      class: user.class,
      branch: user.branch,
      img: user.img,
      phone: user.phone,
      email: user.email,
      message: "user logged in",
    });
  }
});

const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findOne({ enrollment: req.params.enrollment });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  // await authUser(req, res);
  // Exclude sensitive fields from the response
  const userInfo = {
    name: user.name,
    enrollment: user.enrollment,
    email: user.email,
    img: user.img,
    branch: user.branch,
    class: user.class,
    email:user.email,
    achievement_count: user.achievement_count,
  };

  res.status(200).send(userInfo);
});

module.exports = { registerUser, authUser, getUserInfo, searchUser };
