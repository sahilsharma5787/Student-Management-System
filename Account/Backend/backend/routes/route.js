const express = require("express");
const router = express.Router();

const {signController} = require("../controllers/signController");
const {loginController} = require("../controllers/loginController");
const {addStudentController} = require("../controllers/addStudentController"); 
const{deleteStudentController} = require("../controllers/deleteStudentController");
const{updateStudentController} = require("../controllers/updateStudentController");
const{readStudentController} = require("../controllers/readStudentController");

router.post("/addstudent",addStudentController);
router.post("/deletestudent",deleteStudentController);
router.post("/updatestudent",updateStudentController);
router.post("/readstudent",readStudentController);
router.post("/login",loginController);
router.post("/sign",signController);



module.exports = router;