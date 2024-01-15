// configure required modules
const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./utils/db");
const User = require("./models/users");

// app server created
const app = express();

// when we get Http request
// help to parse body which is json
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORs
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Orgin", "*");
  res.setHeader("Access-control-Allow-Orgin", "GET,POST,PUT,DELETE");
  next();
});

// test route

app.get("/", (req, res, next) => {
  res.send("Postgres CURD");
});

// CRUD routes
app.use("/users", require("./routes/users"));

// error handling

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database Connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
