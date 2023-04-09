const mongoose=require("mongoose");
const {Schema}=mongoose;
const SponsororSchema=new Schema({

name:{
    type:String,
    required:true
},

password:{
    type:String,
    required:true
},

phoneNo:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
event:{
    type:String,
    required:false,
    default:""
},
eventDiscription:{
    type:String,
required:false,
default:""

}


})
module.exports =mongoose.model("sponsee",SponsororSchema)