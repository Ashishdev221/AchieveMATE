const express = require('express');
const connection = require("./config/db");
const userRoutes = require("./routes_student/user")
const achievementsRoutes = require("./routes_student/Achievement")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const User = require("./models/user")
const Achievement = require("./models/Achievement")
const app = express();
const cors = require('cors'); // Import the CORS middleware

dotenv.config();
app.use(cors());

connection();
app.use(bodyParser.json());
// app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/achievements", achievementsRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
}); 