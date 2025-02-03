const express = require("express");
const connectDB = require("./config/database");
// user model call
const User = require("./models/user");

const app = express();

app.use(express.json()); //middleware to parse the incoming request body

app.post("/signup", async (req, res) => {
  console.log("Request body", req.body);
  const user = new User(req.body); //Sending the request body to the User model to create a new instance of the User model
  try {
    await user.save(); //save the user object to the database
    res.send("user added sucessfully");
  } catch (err) {
    res.status(404).send(`Something went wrong: ${err.message}`);
  }
});

//Fetch the user by user email

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log("User email", userEmail);
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length == 0) {
      res.status(404).send("No user found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went error");
  }
});

// FindOne API - GET/ user- get all users from the database
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   console.log("User email", userEmail);
//   try {
//     const users = await User.findOne({ emailId: userEmail });
//     if (users.length == 0) {
//       res.status(404).send("No user found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went error");
//   }
// });

//Feed API - GET/ feed- get all users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went error");
  }
});

//Delete API - DELETE/ user- delete user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findByIdAndDelete({_id:userId});//both codes are same, working fine
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");  
  } catch (err) {
    res.status(400).send("Something went error");
  }
});

//Update API - patch/ user- update user from the database
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params.userId; //Get the user id from the request parameter(url)
  // const userId = req.body._id;
  const data = req.body;
  try {
    //API level validation for the user first name last name and email(should not be updated);
    const ALLOWED_UPDATES = ["gender", "skills", "about", "photoUrl", "age"];
    const isUpdateAllowed = Object.keys(data).every((update) => ALLOWED_UPDATES.includes(update));

    if (!isUpdateAllowed) {
      res.status(400).send("upate not allowed");
    }
    // Should not updated more than 10 skills"skills":["Java", "React","CSS","HTML","JAVSCRIPT","Java", "React","CSS","HTML","JAVSCRIPT","Java", "React","CSS","HTML","JAVSCRIPT"]
    if(data?.skills.length > 10){
      res.status(400).send("Skills should not be more than 10");
    }
    //API level validation ending

    const user = await User.findByIdAndUpdate({_id:userId}, data);
    res.send("User updated successfully");  
  } catch (err) {
    res.status(400).send("Something went error, user is not updated");
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
