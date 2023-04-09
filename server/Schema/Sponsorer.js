const mongoose=require("mongoose");
const {Schema}=mongoose;
const SponsororSchema=new Schema({
companyName:{
    type:String,
    required:true
},

companyType:{
    type:String,
    required:true
},
companyName:{
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
range:{
    type:String,
    required:true
},
discription:{
    type:String,
    required:false
}
})
module.exports =mongoose.model("sponsorors",SponsororSchema)