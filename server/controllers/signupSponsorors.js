const SponsororSchema=require("../Schema/Sponsorer")
const bcrypt=require("bcrypt")
const signupSponsororsController=async(req,res)=>{
console.log(req.body.range)
    try{
        if(!(await SponsororSchema.findOne({ email:req.body.email}))){
            const salt=await bcrypt.genSalt(10);
            let secPassword=await bcrypt.hash(req.body.password,salt)
const userData=await SponsororSchema.create({
email:req.body.email,
password:secPassword,
companyName:req.body.companyName,
companyType:req.body.companyType,
phoneNo:req.body.phoneNo,
range:req.body.range,
discription:req.body.discription
})
res.json({success:true})}
else
return res.json({success:false,
reason:"user Exists"})
}
catch(error){
    // console.log(error);
res.json({error:error})
    
}
}
module.exports=signupSponsororsController;