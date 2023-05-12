const { error } = require("console");
const User = require("../models/user");
const Achievement = require("../models/Achievement")
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
      status
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
        status
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

  // async function getAllAchievements() {
  //   try {
  //     const achievements = await Achievement.find().populate('user');
  //     console.log(achievements)
  //     return achievements;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to retrieve achievements.');
  //   }
  // }
  

const getAchievements = asyncHandler( async (req, res) => {
  try {
    const achievements = await Achievement.find().populate('user');
    console.log(achievements)
    res.status(200).json(achievements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

  module.exports = { addAchievement,getAchievements};