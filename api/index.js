import express from "express";

import userRoute from "./routes/user.route.js";
import signupRoute from "./routes/signup.route.js";
import { connectDB } from "../db.js";

// dotenv.config();
// mongoose.connect(process.env.MONGO)
// .then(()=>{
//     console.log('Connected to database');
// })
// .catch((err)=>{
//     console.log('Connection failed',err);
// });

connectDB();
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});

app.use("/api/user", userRoute);
app.use("/api/auth", signupRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
