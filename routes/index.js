var express = require('express');
var router = express.Router();


router.get("/",(req,res)=>{
    res.send("Home page");
})
//mongo basics
// const userModel=require("./users");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// //creating
// router.get('/create', async function(req, res) {
//   const createduser= await userModel.create({
//     username: "Ash",
//     age: 18,
//     name: "Ashwin"
//   });
//   res.send(createduser);
// });

// //read
// router.get("/allusers",async function(req,res){
//     let allusers=await userModel.find();
//     res.send(allusers);
// })

// //findone
// router.get("/allusers2",async function(req,res){
//   let allusers=await userModel.findOne({username: "Ash"});
//   console.log(allusers);
//   res.send(allusers);
// })

// //deletion
// router.get("/delete",async function(req,res){
//   let deleteuser=await userModel.findOneAndDelete({
//     username: "Ash"
//   });
//   res.send(deleteuser);
// })



//SESSIONS

// router.get("/",(req,res)=>{
//   req.session.age=25;
//   res.render("index");
// })

// router.get("/check",(req,res)=>{
//  console.log(req.session);
//  res.send("ban gaya");
// })

// router.get("/remove",(req,res)=>{
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("deleted");
//   })
// })





//COOKIES
// router.get("/",(req,res)=>{
//   res.cookie("age",25);
//   res.render("index");
// })

// router.get("/read",(req,res)=>{
//   console.log(req.cookies);
//   res.send("check");
// })

// router.get("/delete",(req,res)=>{
//   res.clearCookie("age");
//   res.send("deleted");
// })







module.exports = router;
