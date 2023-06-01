const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String },
    enrollment: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    img: {
      type: String,
      default:
        "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png",
    },
    branch: { type: String, default: "CSE" },
    class: { type: String, default: "BTECH 4th Year" },
    achievement_count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
