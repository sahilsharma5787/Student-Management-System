const mongoose = require("mongoose");

const studentModel = new mongoose.Schema(
    {
        name:{
            type:String
        },
        rollnumber:{
            type:String
        },
    }
);

const studentSchema = mongoose.model("studentSchema" , studentModel);
module.exports = studentSchema; 