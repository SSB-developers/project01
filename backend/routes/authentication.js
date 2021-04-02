const express=require("express")
const router=express.Router()

const {signUp}=require("../controllers/authentication")
//here we have handaled all authentiaction related routes.............
//for example signin/signup
router.get("/signup",signUp)//signUp is implemented at /contellers/authentication

module.exports=router