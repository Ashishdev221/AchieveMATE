const {
  registerUser,
  authUser,
  getUserInfo,
  searchUser,
} = require("../controllers/user");
const { sendOtp } = require("../controllers/verifyEmail");

const router = require("express").Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/getUser/:enrollment", getUserInfo);
router.get("/isUser/:enrollment", searchUser);
router.post("/send-otp", sendOtp);

module.exports = router;
