
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(cookieParser());

// app.set("view engine" , "pug");
// app.set("views" , "./views");
app.use("/api/user" , require("./routes/userRouter"));

db();


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
