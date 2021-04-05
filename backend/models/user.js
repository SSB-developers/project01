const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');

//This is user Schema where we have desigined what are the information we required to store
//a user into our data base
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
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
      validate : [isEmail , 'The entered email is not valid']
    },
    userInfo: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      minlength : [8, 'password must be atleast of length 8'],
      required: true,
    },
    
    role: {
      type: Number,
      default: 0,
    }, 
  },
  { timestamps: true }
);

// password is saved just before user stored in DB

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method for login

userSchema.statics.login = async (email,password) => {
    const user = await this.findOne({email});
    if(user) {
      const result = bcrypt.compare(password, user.password);
        if(!result) {
          throw Error('Incorrect password');
        } else {
         return user;
        }
    } else {
      throw Error('Incorrect email ID');
    }
}

module.exports = mongoose.model("User", userSchema);

