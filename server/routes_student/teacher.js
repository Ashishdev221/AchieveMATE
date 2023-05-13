const { authUser } = require("../controllers/teacher");

const router = require("express").Router();

router.post("/login", authUser);

module.exports = router;
