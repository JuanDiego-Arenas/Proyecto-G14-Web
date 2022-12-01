import mongoose from "mongoose";

const userModel = mongoose.Schem({
    "name":{type:String, require:true},
    "lastName":{type:String, require:true},
    "email":{type:String, require:true},
})

export default mongoose.model("users", userModel)