const SponseeSchema=require("../Schema/Sponsee")
const bcrypt=require("bcrypt")
const signupSponseeController=async(req,res)=>{

    try{
        if(!(await SponseeSchema.findOne({ email:req.body.email}))){
            const salt=await bcrypt.genSalt(10);
            let secPassword=await bcrypt.hash(req.body.password,salt)
const userData=await SponseeSchema.create({
email:req.body.email,
password:secPassword,
name:req.body.name,

phoneNo:req.body.phoneNo,

})
res.json({success:true})
}
else
return res.json({success:false,
reason:"user Exists"})
}
catch(error){
    // console.log(error);
res.json({error:error})
    
}
}
module.exports=signupSponseeController;