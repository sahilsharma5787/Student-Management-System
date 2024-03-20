const mongoose = require("mongoose");

const signModel = new mongoose.Schema(
    {
        email:{
            type:String
        },
        phone:{
            type:String
        },
        password:{
            type:String
        }
    }
);

const signSchema = mongoose.model("signSchema" , signModel);
module.exports = signSchema; 