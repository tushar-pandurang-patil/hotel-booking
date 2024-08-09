import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
    {   
        room: {
            type: String,
            required: true,
        },
        userid: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        fromDate: {
            type: String,
            required: true,
        },
        toDate: {
            type: String,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        totalDays: {
            type: Number,
            required: true,
        },
        transactionId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true, default:"booked",
        },
        hotelName:{
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("bookings", BookingSchema);
