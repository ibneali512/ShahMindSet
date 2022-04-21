const express= require ('express');
const Router= express.Router();
const emailvalidator = require("email-validator");
const nodemailer = require("nodemailer");
require('./conn.js');
const User= require ('./userSchema.js');

// Router.get('/', (req, res)=>{
//     res.send('hello world im from backend calling');
// })
// Promise and get methoddd 
// Router.post('/register', (req, res)=>{
    //  console.log(req.body.email);
    // we can use with help of array desturcting in ecma scripts 2015
    // const {name, email, message}=req.body
    // console.log(req.name);
//  res.json({mesage:req.body});

//     if (!name || !email || !message){
//         return res.status(422).json ({ error: "please fill the form properly"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if (userExist){
//             return res.status(422).json ({ error: "email exist"});
//         }
//         const user= new User({name, email, message});
//         user.save().then(()=>{
//             return res.status(201).json ({ message: "data inserted succefully"});
//         }).catch((err)=>{
//             return res.status(500).json ({ message: "data-base erro"});
//         }).catch((err)=>{
//             console.log(err);
//         });
//     })
// })


// by using async method
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "sibneali512@gmail.com",
      pass: "pakistan512",
    },
  });
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
Router.post('/register', async(req, res)=>{
    const {name, email, phone, message}=req.body
// console.log(req.body);
const mail = {
    from: name,
    to: "sibneali512@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Email: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
    if (!name || !email || !message || !phone){
        return res.status(422).json ({ error: "please fill the form properly"});
    
    }
    if(emailvalidator.validate(email)){
        try{
            // const userExist=  await User.findOne({email:email});
            //    if (userExist){
            //        return res.status(422).json ({ error: "email exist"});
            //    }
           
           const user= new User({name, email, message, phone});
   
           await user.save();
           return res.status(201).json ({ message: "data inserted succefully"});
                   
               }
        catch(err){
           console.log(err);
       }
  }else{
     res.status(400).json({error: "Invalid Email"});
  }

   

    

   

});




// user login

// Router.post('/signin', async (req, res)=>{
    
//  try{
//         const { email, password}=req.body;
       
//         console.log(req.body);
//         // res.json({ message: "succefully fetched"});
//         if ( !email || !password){
//             return res.json ({ error: "please fill the form properly"});
//         }

//         const userLogin=  await User.findOne({email:email});
//       res.cookie("myfirstcookie", 'ali');
//         if ( !userLogin){
//             return res.json ({ error: "email is not valid "});
//         } else{
//         return res.json({ message: "user sign succeffullyy"});
//         }
//     }
//     catch(err){
// console.log(err);
//     }

// });



module.exports = Router;