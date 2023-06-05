const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  designation: {
    type: String
  },
  branch: {
    type: String
  },
  category: {
    type: String
  },
  img: {
    type: String,
    default:
        "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
  },
  department: {
    type: String
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);
