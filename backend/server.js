const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const { readdirSync } = require("fs");
const cookieParser = require("cookie-parser");

require("dotenv").config();

connectDB();

app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log("http://127.0.0.1:3000");
});
