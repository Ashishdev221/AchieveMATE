const { error } = require("console");
const User = require("../models/user")
const asyncHandler = require("express-async-handler")

const registerUser = asyncHandler( async (req, res) => {
  try {
      const userExist = await User.findOne({ enrollment: req.body.enrollment });
      if (userExist)
          return res
              .status(409)
              .send({ message: "User with given enrollment already Exist!" });

      await new User({
        ...req.body,
    }).save();
    return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

const authUser = asyncHandler( async (req, res) => {
  const {password,enrollment } = req.body;
  const user = await User.findOne({ enrollment });
  
  if (!user) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }
  
  const isMatch = await user.comparePassword(password);
  
  if (!isMatch) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }
  else{
    res.status(200).send({message:'user logged in' });
  }
  
});

module.exports = { registerUser,authUser };

