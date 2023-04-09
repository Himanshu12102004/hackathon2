const sponsees=require("../Schema/Sponsee")
const bcrypt=require("bcrypt")
// const sponsorors= require("../Schema/Sponsorer")
const mongoose=require("mongoose")

const loginSponseeController=async(req,res)=>{
userData= await sponsees.findOne({email:req.body.email})
// sponsorors=await sponsorors.find({}).toArray();
console.log(req.body)
if(!userData)
{
    
   return res.json({error:"no such user"});

}
const pwdCompare=await bcrypt.compare(req.body.password,userData.password)

 if(pwdCompare)
{ 
    mongoURI="mongodb://localhost:27017/SponsorApp"
const mongodb=async ()=>{
    try{
await mongoose.connect(mongoURI)
console.log("yes")
const SponsororsList = mongoose.connection.db.collection("sponsorors")
const sponsorors=await SponsororsList.find().project({_id:false,password:false}).toArray()
// console.log(global.sponsorors)
    
return res.json({success:true,data:sponsorors,userData:await sponsees.findOne({email:req.body.email})});
}
catch(error){
console.log(error)
}}
mongodb()
}else
 return res.json({error:"password did not match"})

}
module.exports=loginSponseeController;