const mongoose=require("mongoose")
const {select}=require("mongoose")
mongoURI="mongodb://localhost:27017/SponsorApp"
const mongodb=async ()=>{
    try{
await mongoose.connect(mongoURI)
console.log("yes")
// const SponsororsList = mongoose.connection.db.collection("sponsorors")
// const SponseeList= mongoose.connection.db.collection("sponsees")
// global.sponsorors=await SponsororsList.find().project({_id:false,password:false}).toArray()
// global.sponsees=await ( SponseeList.find().project({_id:false,password:false})).toArray()
// console.log(global.sponsorors)
// // console.log(await sponsorors.toArray())
// console.log(global.sponsees)
// console.log(global.sponsorors)
}
    catch(error){
        console.log(error)
    }
}
module.exports=mongodb
