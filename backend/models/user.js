const mongoose = require("mongoose");

//This is user Schema where we have desigined what are the information we required to store
//a user into our data base
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastName: {
      type: String,
      maxlength: 33,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
      trim: true,
    },
    userInfo: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    role: {
      type: Number,
      default: 0,
    },
    
    
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
//Subhajeet : Hum user ka banaya hai tum socho Posts ka Schema kaisa hoga...
