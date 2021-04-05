//here we will be writting all the actual functionlities of authentication
const User = require('../models/user');
const jwt = require('jsonwebtoken');

function handleError(err) {
    console.log(err); // all the errors will be handled together
}

function createToken(id) {
    return jwt.sign({id}, 'ssb', {
        expiresIn : 1000*60*60*24
    });
}
module.exports.signUp = async (req,res)=>{
    
    const {email, password} = req.body;
    try {
        const user = await User.create({ email, password }); // temporary user
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, time: 1000*60*60*24 });
        user.save((err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"something went wrong in saving"
                })
            }
            return res.status(200).send({
                user,
                token
            })
        })
    } catch(err) {
        const errors = handleError(err);
        res.json(errors);
    }
}

module.exports.login = async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.login({ email, password }); // static login method is defined in userSchema
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, time: 1000*60*60*24 });
        res.status(201).json({ user: user._id }); 
    } catch(err) {
        const errors = handleError(err);
        res.json(errors);
    }
}
