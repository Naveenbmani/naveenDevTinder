const express = require("express");

const app = express();

// this only matches Get requests to the root URL call /user
app.get("/user", (req, res) => {
  console.log("user route");
  res.send({ name: "John", age: 30 })
})
// this only matches Post requests to the root URL call /user
app.post("/user", (req, res) => {
  console.log("user route");
  res.send({ name: "John", age: 30 })
})

app.delete("/user", (req, res) => {
  console.log("user delted");
})

app.patch("/user", (req, res) => {
  console.log("user delted");
  res.send({ name: "John", age: 40 })
})

// this matches all requests to the root URL call /user
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
