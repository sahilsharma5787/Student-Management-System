const express = require("express");
const signSchema = require('../models/sign');
const bcrypt = require("bcrypt");

exports.signController = async(req,res)=>{
    try{
        //destructure data from req
        const{email,phone,password} = req.body;

        // check user exists
        const existingUser = await signSchema.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists!!!"
            });
        }

        //hashing the original password
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10);

        }catch(error){
            return res.status(500).json({
                success:false,
                message:error.message
            });
        }

        //adding data to database
        await signSchema.create({email,phone,password:hashPassword});
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