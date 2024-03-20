const express = require("express");
const studentSchema = require('../models/student');

exports.updateStudentController = async(req,res)=>{
    try{
        //destructure data from req
        
        const{rollnumber,name} = req.body;
        console.log(rollnumber);
        //checking user exists or not 
        let user = await studentSchema.findOne({rollnumber});
        if(!user){
            return res.status(401).json({
                success:false,
                message : "User not exists!!"
            })
        }

        await studentSchema.findOneAndUpdate(
            { rollnumber },
            { $set: { name } },
            { new: true }
        );
        
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