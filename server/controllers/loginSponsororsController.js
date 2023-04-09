const sponsorors=require("../Schema/Sponsorer")
const bcrypt=require("bcrypt")
const mongoose=require("mongoose")

const loginSponsororsController=async(req,res)=>{
userData= await sponsorors.findOne({email:req.body.email})

if(!userData)
{
  return  res.json({error:"no such user"});

}
const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
if(pwdCompare)
{ 
    mongoURI="mongodb://localhost:27017/SponsorApp"
const mongodb=async ()=>{
    try{
await mongoose.connect(mongoURI)
console.log("yes")
const SponseeList = mongoose.connection.db.collection("sponsees")
const sponsee=await SponseeList.find().project({_id:false,password:false}).toArray()
// console.log(global.sponsorors)
    
return res.json({success:true,data:sponsee,userData:await sponsorors.findOne({email:req.body.email})});
}
catch(error){
console.log(error)
}}
mongodb()
}else
return res.json({error:"password did not match"})

}
module.exports=loginSponsororsController;