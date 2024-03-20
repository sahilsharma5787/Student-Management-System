const express = require("express");
const studentSchema = require('../models/student');

exports.addStudentController = async(req,res)=>{
    try{
        //destructure data from req
        
        const{name,rollnumber} = req.body;
        

        //adding data to database
        await studentSchema.create({name,rollnumber});
        return res.status(200).json({
            success:true,
            message:"Successfully created!!"
        });

    }catch(error){
        console.log("error creating data!!");

        return res.status(500).json({
            success:false,
            message:error.message

        });
    }
};