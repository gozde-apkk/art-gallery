
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(cookieParser());


mongoose.connect(process.env.MONGO)
// app.set("view engine" , "pug");
// app.set("views" , "./views");
app.use("/api/user" , require("./routes/userRouter.js"));







const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
