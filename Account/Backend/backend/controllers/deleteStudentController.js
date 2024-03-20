const express = require("express");
const studentSchema = require('../models/student');

exports.deleteStudentController = async (req, res) => {
    try {
        // Destructure data from req
        const { rollnumber } = req.body;

        // Find the user
        let user = await studentSchema.findOne({ rollnumber });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Delete the user
        await studentSchema.deleteOne({ rollnumber });

        return res.status(200).json({
            success: true,
            message: "User successfully deleted"
        });

    } catch (error) {
        console.log("Error deleting data:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
