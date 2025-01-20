const express = require("express");
const connectDB=require("./config/database");
// user model call
const User = require("./models/user");

const app = express();

app.post("/signup", async (req,res)=>{
  const user=new User({
    firstName:"Naveen",
    lastName:"B",
    emailId:"naveenbmani732@gmail",
    password:"123456",
    age:"25",


  })
  // const user=new User(userObject);//creating new instance of the Uuser model
  try{
    await user.save();//save the user object to the database
    res.send("user added sucessfully"); 
  }catch(err){
    res.status(400).send("Error saving error",err.message);
  }
  });


connectDB()
  .then(() => {
    console.log("Database is connected");
    app.listen(7777, () => {
      console.log("server is successfully listening on port");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });



