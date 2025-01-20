const express = require("express");

const app = express();

app.get("/getAllData",( req, res) => {
  // try{
    console.log("User Auth cheked");
    throw new Error("User is not authorized to get all data");
    res.send("User is authorized to get all data");
  // }
  // catch(err){
  //   res.status(500).send("User is not authorized to get all data");
  // }
});

app.use("/",(err,req, res, next) => {
  if(err){
    res.status(500).send("There was a server side error");
  }
 })

app.listen(7777, () => {
  console.log("server is successfully listening on port");
})
