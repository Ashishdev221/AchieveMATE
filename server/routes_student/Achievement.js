const { registerUser, authUser, getUserInfo } = require("../controllers/user");
const {addAchievement,getAchievements, updateAchievementStatus} = require("../controllers/achievement")

const router = require("express").Router();

router.post("/:enrollmentNumber", addAchievement);
router.put("/:id", updateAchievementStatus);
router.get("/all",getAchievements)

module.exports = router;