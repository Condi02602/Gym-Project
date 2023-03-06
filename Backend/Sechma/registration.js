import mongoose from "mongoose";

const register  =  new mongoose.Schema({
    username: { type: String, required: true },
    email : {type:String ,required:true},
    password :{type:String , required:true},
    age : {type:Number , required:true},
    gender : {type:String ,  required : true},
    address : {type:String ,  required : true},
    contact : {type:Number , required  : true},
});


const registerModel  =   mongoose.model("register" , register);

module.exports  =  registerModel;
