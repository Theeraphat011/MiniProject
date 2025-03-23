const userModel = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
   createMember: async (req, res) => {
      try {
         const { name, email, password } = req.body;

         if (!email || !password) {
            return res
               .status(400)
               .json({ message: "Missing Email or Password" });
         }

         // Check for duplicate email
         const scanMember = await userModel.findOne({ email });
         if (scanMember) {
            return res
               .status(409)
               .json({ message: "Email already registered" });
         }

         // Hash password
         const hashedPassword = await bcrypt.hash(password, 10);

         // Create new member
         const newMember = new userModel({
            name,
            email,
            password: hashedPassword,
         });
         await newMember.save();

         res.status(200).json({ message: "User registered successfully" });
      } catch (err) {
         console.error(err);
      }
   },

   login: async (req, res) => {
      try {
         const { email, password } = req.body;
         
         // Search for user
         const user = await userModel.findOne({ email });
         // console.log(user);
         if (!user) {
            return res.status(400).json({ message: "Invalid email" });
         }

         // Check password match
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
         }

         // Generate token
         const token = jwt.sign(
            {
               email: user.email,
            },
            "SECRET_KEY",
            { expiresIn: "1d" }
         );

         res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

         res.status(200).json({ message: "Login Successful", token });
      } catch (err) {
         res.status(500).json({ message: "Server Error", err });
         console.log(err);
      }
   },

   logout: async (req, res) => {
      res.clearCookie("token");
      res.status(200).json({ message: "Logout Success" });
   }
};
