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
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);
