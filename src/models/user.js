const mongoose = require("mongoose");
const validator = require("validator");
const useSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true,
        minlength: 3,//minlength because the type is string
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
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },

    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Password is not strong enough");
            }
        }
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
},
{
    timestamps: true
}
);




const User=mongoose.model("User", useSchema);
module.exports=User;