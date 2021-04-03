const express=require("express")
const router=express.Router()

const authentication = require("../controllers/authentication")
//here we have handaled all authentiaction related routes.............
//for example signin/signup
router.get("/signup", (req,res) => {
    res.render('signup');
})//signUp is implemented at /contellers/authentication
router.get("/login", (req,res) => {
    res.render('login')
})
router.post("/signup",authentication.signUp)
router.post("/login",authentication.login)

module.exports=router;