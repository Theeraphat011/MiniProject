const express = require("express");
const { createMember, login, logout } = require("../controllers/auth");

const router = express.Router();

router.post("/register", createMember);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
