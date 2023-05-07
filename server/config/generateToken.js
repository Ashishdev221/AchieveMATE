const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "ctaeachieveMATE", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
