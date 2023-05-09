const { registerUser, authUser, getUserInfo } = require("../controllers/user");

const router = require("express").Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/getUser/:enrollment", getUserInfo);

module.exports = router;
