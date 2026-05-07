import jwt from "jsonwebtoken";
import { ENV } from "../lib/env.js";

import User from "../models/Userl.js"

export const protectRoute=async(req,res,next)=>{
    try{
   const token=req.cookies.jwt
   if(!token)return res.status(401).json({message:"Unauthorized-No token provided"})
   
    const decoded=jwt.verify(token,ENV.JWT_SECRET)
       if(!token)return res.status(401).json({message:"Unauthorized-Invalid token"})
        
        const user=await User.findById(decoded.userId)
        if(!user)return res.status(400).json({message:"user not found"})
            req.user=user;
        next()
    }
    catch(error){
  console.log("Auth Middleware Error:", error); // 👈 ADD THIS
 res.status(500).json({ message: "Internal server error" });       
    }
}