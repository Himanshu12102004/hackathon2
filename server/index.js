const express=require("express")
const app=express();
const mongodb=require("./db")
const Routers=require("./Routes/routes")
// console.log(Routers)
const port=5021;
mongodb();
app.get("/", (req,res)=>{

    res.send("helo");
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
    
    );
    next();
    
    })
app.use(express.json())

app.use("/api",Routers.signupSponsororsRouter)
app.use("/api",Routers.loginSponsorerRouter)
app.use("/api",Routers.signupSponseeRouter)
app.use("/api",Routers.loginSponseeRouter)
app.use("/api",Routers.eventRouter)
app.use("/api",Routers.deregisterRouter)
app.listen(port,()=>{
    console.log("Server")
})