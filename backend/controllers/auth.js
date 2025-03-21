const userModle = require("../models/model");
const bcrypt = require("bcrypt");

module.exports = {
   createMember: async (req, res) => {
      try {
         const { email, password } = req.body;

         if (!email || !password) {
            return res
               .status(400)
               .json({ message: "Missing Email or Password" });
         }

         //ตรวจอีเมลซ้ำ
         const scanMember = await userModle.findOne({ email });
         if (scanMember) {
            return res
               .status(409)
               .json({ message: "Email already registered" });
         }

         //Hash password
         const hashedPassword = await bcrypt.hash(password, 10);

         //NewMember
         const newMember = new userModle({ email, password: hashedPassword });
         await newMember.save();

         res.status(200).json({ message: "User registered successfully" });
      } catch (err) {
         console.error(err);
      }
   },

   login: async (req, res) => {
      try {
         const { email, password } = req.body;

         // Search Uesr
         const user = await userModle.findOne({ email });
         console.log(user);
         if (!user) {
            return res.status(400).json({ message: "Invalid email" });
         }

         // Check Match
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
         }

         res.status(200).json({ message: "Login SuccessFull" });
      } catch (err) {
         res.status(500).json({ message: "Server Error", err });
      }
   },
};
