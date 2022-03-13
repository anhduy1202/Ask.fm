const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const mysql = require("mysql");
var bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");

dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/v1/auth",userRoute)

app.listen(8000, () => {
  console.log("Server is running");
});
