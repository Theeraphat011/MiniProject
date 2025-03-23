const express = require('express');
const authMiddleware = require('../middleware/middleware');

const router = express.Router();

router.get('/admin', authMiddleware, (req, res) => {
    res.status(200).json({message: "Admin Page"});
})


module.exports = router;