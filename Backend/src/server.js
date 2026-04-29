// const express=require('express');
import express from "express";
import dotenv from "dotenv"
//importing routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import {connectDB} from "./lib/db.js"

dotenv.config();
const app=express()
const __dirname=path.resolve()
//from env
const PORT=process.env.PORT || 3000
app.use(express.json())//req.body

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)



app.listen(PORT,()=>
{
  console.log("server running on port:"+PORT)
  connectDB()
}
  );
