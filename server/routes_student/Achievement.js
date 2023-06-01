const { registerUser, authUser, getUserInfo } = require("../controllers/user");
const {
  addAchievement,
  getAchievements,
  updateAchievementStatus,
  getAchievementLeaderBoard,
  updatelikeCount,
  getCount,
} = require("../controllers/Achievement");

const router = require("express").Router();

router.post("/:enrollmentNumber", addAchievement);
router.put("/:id", updateAchievementStatus);
router.put("/likes/:id", updatelikeCount);
router.get("/leaderBoard", getAchievementLeaderBoard);
router.get("/all", getAchievements);
router.get("/count", getCount);

module.exports = router;
