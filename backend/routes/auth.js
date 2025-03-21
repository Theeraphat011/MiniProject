const express = require("express");
const { createMember, login } = require("../controllers/auth");

const router = express.Router();

router.post("/register", createMember);
router.post("/login", login);

module.exports = router;
