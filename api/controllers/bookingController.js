import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
export const bookRoom = async (req, res) => {
    const {
        room,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays
    } = req.body;

    try {
        const newBooking = new Booking({
            room: room.name,
            roomId: room._id,
            userid,
            fromDate,
            toDate,
            totalAmount,
            totalDays,
            transactionId: '1234',
        })
        const booking = await newBooking.save();

        const roomtemp = await Room.findOne({_id:room._id});

        roomtemp.currentBookings.push(
            {bookingid:booking._id,
            fromDate,
            toDate,
            userid:userid,
            status:booking.status,
            });

        await roomtemp.save();

        res.status(200).json({
            message: "Room booked successfully!",
            booking
        });
        console.log("Room booked successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to book room",
            error: error.message,
        });
    }
};

export const getBookingsByUserId = async (req,res) => {
    const userid = req.body.userid;

    try{
        console.log(userid);
        const bookings = await Booking.find({userid:userid})
        res.send(bookings)
    }catch(error){
        return res.status(400).json({error});
    }
}