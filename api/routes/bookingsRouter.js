import express from "express";
import { bookRoom, getBookingsByUserId } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookroom", bookRoom);

router.get("/getBookingsByUserId", getBookingsByUserId);

export default router;