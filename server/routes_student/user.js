const {
  registerUser,
} = require("../controllers/user");

const router = require("express").Router();

router.post("/", registerUser);

module.exports = router;


