// const express=require('express');
import express from "express";
import dotenv from "dotenv"
//importing routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
const app=express()
//from env
const PORT=process.env.PORT || 3000

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

console.log(process.env.PORT);


app.listen(PORT,()=>console.log("server running on port:"+PORT));
