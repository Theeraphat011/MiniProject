const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: "Unauthorized"});
    };

    try {
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err)
        return res.status(403).json({ message: "Invalid Token"});
    }
}

module.exports = authMiddleware;
