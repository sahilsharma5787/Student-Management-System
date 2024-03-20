const express = require("express");
const studentSchema = require('../models/student');

exports.readStudentController = async(req,res)=>{
    try{
        //destructure data from req
        
        const{rollnumber} = req.body;
        //checking user exists or not 
        let user = await studentSchema.findOne({rollnumber});
        if(!user){
            return res.status(401).json({
                success:false,
                message : "User not exists!!"
            })
        }

        const userData = {
            name: user.name,
            rollnumber: user.rollnumber,
            // Add other fields as needed
        };


        
        return res.status(200).json({
            success:true,
            message:"Successfully created!!",
            data:userData
        });

    }catch(error){
        console.log("error creating data!!");

        return res.status(500).json({
            success:false,
            message:error.message

        });
    }
};