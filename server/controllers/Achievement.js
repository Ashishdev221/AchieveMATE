const { error } = require("console");
const User = require("../models/user");
const Achievement = require("../models/achievement");
const asyncHandler = require("express-async-handler");

const addAchievement = asyncHandler(async (req, res) => {
  const enrollmentNumber = req.params.enrollmentNumber;
  const {
    user,
    title,
    certifying_authority,
    category,
    certificate_issue_date,
    img,
    certificate_number,
    certificate_link,
    description,
    status,
  } = req.body;

  try {
    // Create a new achievement object using the data from the request
    const achievement = new Achievement({
      user,
      title,
      certifying_authority,
      category,
      certificate_issue_date,
      img,
      certificate_number,
      certificate_link,
      description,
      status,
    });

    // Save the achievement to the database
    await achievement.save();

    // Return a success response
    res.status(200).json({
      message: "Achievement created successfully",
      enrollmentNumber,
      achievement,
    });
  } catch (error) {
    // Return an error response
    res.status(500).json({
      message: "Error creating achievement",
      error,
    });
  }
});

const getAchievements = asyncHandler(async (req, res) => {
  try {
    const achievements = await Achievement.find()
      .sort({ createdAt: -1 })
      .populate("user");
    res.status(200).json(achievements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

const updateAchievementStatus = asyncHandler(async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      return res.status(404).json({ error: "Achievement not found" });
    }

    const { status } = req.body;
    if (!status || !["accepted", "rejected", "pending"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    achievement.status = status;
    if (status === "accepted") {
      const user = await User.findById(achievement.user);
      user.achievement_count += 1;
      await user.save();
    }
    await achievement.save();

    return res.json(achievement);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const updatelikeCount = asyncHandler(async (req, res) => {
  try {
    const achievementId = req.params.id;

    // Find the achievement by its ID
    const achievement = await Achievement.findById(achievementId);

    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    // Increment the like count
    achievement.likes++;

    // Save the updated achievement
    await achievement.save();

    return res.json({ message: "Achievement liked successfully", achievement });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

const getAchievementLeaderBoard = asyncHandler(async (req, res) => {
  try {
    const achievements = await Achievement.aggregate([
      {
        $match: {
          status: "accepted",
        },
      },
      {
        $group: {
          _id: "$user",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $project: {
          _id: 0,
          user: { $arrayElemAt: ["$user", 0] },
          count: 1,
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    res.status(200).json({ achievements });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

const getCount = asyncHandler(async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const achievementCount = await Achievement.countDocuments({ status: 'accepted' });
    res.status(200).json({userCount, achievementCount});
  }
  catch (err) {
    console.error('Error fetching data count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = {
  addAchievement,
  getAchievements,
  updateAchievementStatus,
  getAchievementLeaderBoard,
  updatelikeCount,
  getCount,
};
