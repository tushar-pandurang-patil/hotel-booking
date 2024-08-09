import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/authRouter.js";
import usersRoute from "./routes/usersRouter.js";
import hotelsRoute from "./routes/hotelsRouter.js";
import roomsRoute from "./routes/roomsRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bookingsRoute from "./routes/bookingsRouter.js";

const app=express();
dotenv.config()
const PORT=5000;

const connect = async()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
} catch(error){
    throw error;
}
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/bookings",bookingsRoute)

app.listen(PORT, ()=>{
    connect();
    console.log(`Server is running on port ${PORT}`);
})