const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema

const postSchema = new mongoose.Schema(
    {
    author:{
        type:ObjectId,
        ref:"User"
    }
    img : {
        type : String,
        default : ""
    },
    textField : {
        type : String,
        default : ""
    },
    likes : {
        type : Number,
        default : 0
    },
    comments : Array
},
{timestamps : true}
);

module.exports = mongoose.model("Post", postSchema);
