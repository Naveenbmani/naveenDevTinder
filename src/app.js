const express = require("express");

const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data is sent");
} )

app.get("/admin/deletedUser", (req, res) => {
  res.send("Deleted User");
} )


app.get("/user", userAuth,(req, res) => {
  res.send("User data is sent");
} )
app.listen(7777, () => {
  console.log("server is successfully listening on port");
})
