const {
  registerUser,authUser
} = require("../controllers/user");

const router = require("express").Router();

router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;


