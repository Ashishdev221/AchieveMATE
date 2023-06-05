const mongoose = require("mongoose");
const User = require("./user");


const achievementSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: { type: String, required: true },
    certifying_authority: { type: String, required: true },
    category: { type: String, required: true },
    certificate_issue_date: { type: String,  required: true },
    img: { type: String, default: "" ,required:true},
    certificate_number: { type: String },
    certificate_link: { type: String},
    description: { type: String },
    status: { 
      type: String, 
      enum: ['accepted', 'rejected', 'pending'], 
      default: 'pending' 
    },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

// achievementSchema.pre('save', async function(next) {
//   const achievement = this;
//   try {
//     // Find the user associated with this achievement
//     const user = await User.findById(achievement.user);

//     // Increment the achievement count of the user
//     // user.achievement_count += 1;

//     // Save the updated user object
//     await user.save();

//     next();
//   } catch (err) {
//     next(err);
//   }
// });


const Achievement = mongoose.model("achievement", achievementSchema);

module.exports = Achievement;