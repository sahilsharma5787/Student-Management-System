const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("Successfully!!!");})
.catch((error)=>{
    console.log("Recieved an Error!!!!");
    console.error(error.message);
    process.exit(1);
});
}

module.exports = dbconnect;