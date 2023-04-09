const SponseeSchema=require("../Schema/Sponsee")
const eventController= async (req,res)=>{
    console.log(req.body)
    // console.log( await SponseeSchema.findOne({email:"anubav@gmail.com"}))
    const update=await SponseeSchema.updateOne({email:req.body.email},{$set:{event:"",eventDiscription:""}})
// console.log(update)
    return res.json({success:"done"})

}
module.exports=eventController;