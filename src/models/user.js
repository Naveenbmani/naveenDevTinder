const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
    },
    lastLame: {
        type: String,
    },
    emailId: {
        type: String,
    },
    password: {
        type: String,
    },
    age: {
        type: Number,

    },
    gender: {
        type: String,
    }
});



const User=mongoose.model("User", useSchema);
module.exports=User;