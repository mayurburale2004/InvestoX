const UserModel = require("../model/userModel.js");

const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');
const {MongoClient}=require("mongodb");
const dotenv=require("dotenv");
dotenv.config();
const uri=process.env.MONGO_URL;
let client;

// async function connectClient() {
//     if(!client){
//         client=new MongoClient(uri , {
//             useNewUrlParser :true,
//             useUnifiedTopology :true,
//         }
//         );
//         await client.connect();
//     }
// }
// async function singup(req,res){
//     const {username , password,email}=req.body;
//     try{
//         await connectClient();
//         const db=client.db("InvestoX");
//         const userCollection =db.collection("users");
//         const user=await userCollection.findOne({username});
//         if(user){
//             return res.status(400)
//             .json({message:"User already exists!"});
//         }
//         const salt=await bcrypt.genSalt(10);
//         const hashedPassword=await bcrypt.hash(password,salt);
// const newUser ={
//     username,
//     password:hashedPassword,
//     email,
// }
// const result=await userCollection.insertOne(newUser);
// const token=jwt.sign({id:result.insertId},process.env.JWT_SECRET_KEY,{expiresIn:"1h"});
//    res.json({token});
//     }
//     catch(err){
//         console.error("Error during singup : ",err.message);
//         res.status(500).send("Server error")
//     }
 
// };

const signup = (req, res) => {
  res.send("Signup successful");
};
module.exports = { signup };
