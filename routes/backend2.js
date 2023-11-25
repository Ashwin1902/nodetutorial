var express = require('express');
var router = express.Router();

const usermodel = require('./user2');
// <-------------------------------------------------------->
//FLASH MESSAGE- EK ROUTE PE BANAYA HUA DATA HUM DUSRE ROUTE PE USE KAR RAHE HAI

// router.get('/',(req,res)=>{
//     req.flash("naam","Ashwin");
//     req.flash("umar",18);
//     res.send("Ban gaya");
// })

//router.get('/checking',(req,res)=>{
    //console.log(req.flash("naam"),req.flash("umar"));
    //res.send(req.flash("naam"));
//})

// <--------------------------------------------------------->

// <--------------------------------------------------------->
//INTERMEDIATE MONGODB

router.get('/',(req,res)=>{
        res.send("Ban gaya");
    })

router.get("/create",async function(req,res){
    let userdata=await usermodel.create({
        username: "ashwiwiidd",
        nickname: "ashvbjvj",
        description: "kuch nhihasjdhahs",
        categories: ["hellodadadef","hid","hmsdfs"]
    });
    res.send(userdata);
})

//How can I perform a case-insensitive search in mongoose 
// router.get("/find",async function(req,res){
//     var regex=new RegExp("^ashwin$","i");
//     let users=await usermodel.find({username:regex});
//     res.send(users);
// })

//to find all documents based on single or multiple array fields
// router.get("/find",async function(req,res){
//     let users=await usermodel.find({categories:{$all: ["hello"]}});
//     res.send(users);
// })


// //How to find documents in particular date range
// router.get("/find",async function(req,res){
//     let date1=new Date("2023-11-23");
//     let date2=new Date("2023-11-25");
//     let users=await usermodel.find({datecreated:{$gte:date1,$lte:date2}});
//     res.send(users);
// })
//lte=less than equal to   gte=greater than equal to


// how to filter based on existence of a field
// router.get("/find",async function(req,res){
//     let users=await usermodel.find({categories:{$exists: true}});
//     res.send(users);
// })
// $exists checks if a field exists, value is not important


router.get("/find",async function(req,res){
    let users=await usermodel.find({
        $expr:{
            $and:[
                {$gte: [{$strLenCP:'$nickname'},0]},
                {$lte:[{$strLenCP: '$nickname'},4]}
            ]
        }
    });
    res.send(users);
})



module.exports=router;