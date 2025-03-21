const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const connectDB = require("./config/db");
const auth = require("./routes/auth");

require('dotenv').config();

connectDB();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', auth)


app.listen(3000, () => {
   console.log("http://127.0.0.1:3000");
});
