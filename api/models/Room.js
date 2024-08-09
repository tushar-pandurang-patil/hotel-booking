import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    type:{
        type:String,
        required:true,
    },
    desc: {
        type: String,
        required: true,
    },
    imageUrls: [],
    currentBookings:[],
  },
  { timestamps: true }
);

export default mongoose.model("rooms", RoomSchema);
