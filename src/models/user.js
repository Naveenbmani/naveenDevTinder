const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true,
        minlength: 6,//minlength because the type is string
        maxlength: 100,//maxlength because the type is string
    },
    lastLame: {
        type: String,
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 18,// min because the type is number

    },
    gender: {
        type: String,
    },
    photoUrl: {
        type: Number,
    },
    about: {
        type: String,
        default: "I am a new default user of this app",
    },
    skills: {
        type: [String],
    },
});



const User=mongoose.model("User", useSchema);
module.exports=User;