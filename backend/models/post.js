const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
    userName : String,
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

module.exports = mongoose.model("post", postSchema);