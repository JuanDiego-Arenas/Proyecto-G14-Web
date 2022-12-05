import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "name":{type:String, required:true},
    "lastName":{type:String, required:true},
    "email":{type:String, required:true},
    "idType":{type:String, required:true},
    "idNumber":{type:String, required:true, unique:true},
    "user":{
        "userName":{type:String}, 
        "password":{type:String}
    }
})



export default mongoose.model("users", userModel)