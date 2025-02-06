import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import signupRoute from './routes/signup.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO)  
.then(()=>{
    console.log('Connected to database');
})  
.catch((err)=>{
    console.log('Connection failed',err);
});
const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

app.use("/api/user",userRoute);
app.use("/api/auth",signupRoute);
