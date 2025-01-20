const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://naveenbmani732:WwUZlpWQqOz4Dw65@namastenodenaveen.epnsy.mongodb.net/devTinder",
  );
};

module.exports = connectDB;

// listen port  should call after  DB load, so we moving below code to app.js
// connectDB()
//   .then(() => {
//     console.log("Database is connected");
//   })
//   .catch((err) => {
//     console.log("Error connecting to database", err);
//   });
