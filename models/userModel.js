const { Schema, model } = require("mongoose");

const userSchema = Schema({
    name:{String, required: true},
    email:{String, required:true},
    password:{type:String, required:true},
    avatar:{type:String },
    posts:{type:Number, default:0 }


})

module.exports= model('user', userSchema)