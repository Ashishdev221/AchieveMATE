const { registerUser, authUser, getUserInfo } = require("../controllers/user");
const {
  addAchievement,
  getAchievements,
  updateAchievementStatus,
  getAchievementLeaderBoard,
} = require("../controllers/achievement");

const router = require("express").Router();

router.post("/:enrollmentNumber", addAchievement);
router.put("/:id", updateAchievementStatus);
router.get("/leaderBoard", getAchievementLeaderBoard);
router.get("/all", getAchievements);

module.exports = router;
