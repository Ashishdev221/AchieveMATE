const { registerUser, authUser, getUserInfo } = require("../controllers/user");
const {addAchievement,getAchievements} = require("../controllers/achievement")

const router = require("express").Router();

router.post("/:enrollmentNumber", addAchievement);
router.get("/all",getAchievements)

module.exports = router;