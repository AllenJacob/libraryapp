const express = require("express");
const signuprouter = express.Router();
const Signupdata = require('../model/Signupdata');


function router(nav){
    signuprouter.get("/",function(req,res){
        res.render("signup",{
            nav,
            title:'Signup'
        });
    });

    signuprouter.get('/login',function(req,res){
        var item ={
             email:req.query.email,
             mobile:req.query.mobile,
             password:req.query.password
        }
        var signup = new Signupdata(item);
        console.log(item);
        signup.save();
        res.redirect('/login');
    });

    return signuprouter;
}
module.exports = router;