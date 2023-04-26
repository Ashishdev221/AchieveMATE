const express = require('express');
const connection = require("./db");
const userRoutes = require("./routes_student/user")
const app = express();
const cors = require('cors'); // Import the CORS middleware

app.use(cors());

connection();


app.use("/api/users", userRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});