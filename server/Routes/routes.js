const { Router } = require("express");
const loginSponsororsController=require("../controllers/loginSponsororsController")
const eventController=require("../controllers/eventController")
const signupSponsororsController=require("../controllers/signupSponsorors")
const signupSponseeController=require("../controllers/signupReceiver")
const loginSponseeController=require("../controllers/loginReceiver")
const deregisterController=require("../controllers/deregisterController")
const express=require("express")
const signupSponsororsRouter=express.Router();
const loginSponsorerRouter=express.Router()
const signupSponseeRouter=express.Router();
const loginSponseeRouter=express.Router();
const eventRouter=express.Router()
const deregisterRouter=express.Router();
signupSponsororsRouter.post("/signupsponsorors",signupSponsororsController)
loginSponsorerRouter.post("/loginsponsorors" ,loginSponsororsController)
signupSponseeRouter.post("/signupsponsee" ,signupSponseeController)
loginSponseeRouter.post("/loginsponsee",loginSponseeController)
eventRouter.post("/event",eventController)
deregisterRouter.post("/deregister",deregisterController)
module.exports={signupSponsororsRouter,
loginSponsorerRouter,
signupSponseeRouter,
loginSponseeRouter,eventRouter,deregisterRouter}

