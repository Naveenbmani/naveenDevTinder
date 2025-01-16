const express = require("express");

const app = express();

// this get the query params from the url and console log it
// http://localhost:7777/user?name=John&age=30 
//o/p: { name: 'John', age: '30' }
// http://localhost:7777/user?userId=101
//o/p: { userId: '101' }
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ name: "John", age: 30 })
// })

// Dynamic route
// this get the query params from the url and console log it
//  http://localhost:7777/user/101/Naveen/xyzx(wen we hit this url in Postman) 
// o/p: { userID: '101', name: 'Naveen', password: 'xyzx' }
app.get("/user/:userID/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ name: "John", age: 30 })
})



app.listen(7777, () => {
  console.log("server is successfully listening on port");
})
