const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        // email: { type: String, required: true },
        // phone: { type: String, },
        password: { type: String, required: true },
        enrollment: { type: String, required: true},
        // branch: {type: String}
    },
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = { User };
