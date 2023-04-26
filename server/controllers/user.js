const {User} = require("../models/user")

const registerUser = async (req, res) => {
  try {
      const user = await User.findOne({ enrollment: req.body.enrollment });
      if (user)
          return res
              .status(409)
              .send({ message: "User with given email already Exist!" });

      await new User({
          ...req.body,
      }).save();
      return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    //   return res.status(500).send({ message: "Internal Server Error" });
    return error
  }
};

module.exports = { registerUser };