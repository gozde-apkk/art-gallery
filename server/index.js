
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
const connectDB = require("./config/db.js")
const products = require('./data/fakedata.js')

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin : "http://localhost:3000", credentials: true}));
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(cookieParser());
connectDB();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

  // app.set("view engine" , "pug");
  // app.set("views" , "./views");
app.use("/api/products", require("./routes/productRouter.js"));
app.use("/api/users" , require("./routes/userRoutes.js"));
// app.use("/api/admin" , require("./routes/adminRoute.js"));




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
