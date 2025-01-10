const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hello")
})

app.use("/test", (req, res) => {
  res.send("hello test")
})

app.use("/", (req, res) => {
  res.send("Dashboard")
})

app.listen(7777, () => {
  console.log("server is successfully listening on port");
})
