const express=require("express")
const app=express()
const mongoose=require("mongoose")
require("dotenv").config()

//Data bse connections has created here...............
mongoose.connect(process.env.DB_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY....")
}).catch(()=>{
    console.log("CONNECTION UNSUCCESSFUL.......")
})
//...........................................................................
const port=8000||PORT

app.get("/home",(req,res)=>{
    res.status(200).json({
        message:"hello and welcome"
    })
})

app.listen(port,()=>{
    console.log("server is running")
})
