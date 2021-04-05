const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const cors=require("cors")
require("dotenv").config()

//All middle wares are here
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

//Out port is here
const port=8000||PORT

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
//we have imported all the routes functions here
const authRoutes = require("./routes/authRoutes")

//All routes are here, we have handaled routes in another folder it is just initialization
app.use(authRoutes)//with the help of this route we will do all the auth related work


app.listen(port,()=>{
    console.log("server is running")
})
