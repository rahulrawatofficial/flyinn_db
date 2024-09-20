const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Flyinn_DB");

//Chack Database connected or not
connect.then(()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Database cannot be connected")
})

//Create a schema
const loginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})


//Collection part
const collection = new mongoose.model("users", loginSchema);

module.exports = collection;