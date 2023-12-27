
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter.js");
const userRouter = require("./routes/userRouter.js");
const userRoutes = require("./routes/userRoutes.js");
const {notFound, errorHandler} = require("./middleware/errorMiddleware.js");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(cookieParser());


mongoose.connect(process.env.MONGO)
// app.set("view engine" , "pug");
// app.set("views" , "./views");
app.use("/api/user" , require("./routes/userRouter.js"));
app.use("/api/auth" , require("./routes/authRouter.js"));
app.get("/", (req, res) => {
    res.send("Hello")
})
app.use("/api/users" , require("./routes/userRoutes.js"));;

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }
  

  app.use(notFound);
  app.use(errorHandler);
const PORT =5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
