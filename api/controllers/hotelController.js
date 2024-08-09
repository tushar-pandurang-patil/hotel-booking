import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedHotel) {
            console.log('Hotel not found');
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(updatedHotel);
    }
    catch (error) {
        console.error('Error updating hotel:', error);
        res.status(500).json(error);
        next(error);
    }
};
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    }
    catch (error) {
        console.error('Error deleting hotel:', error);
        res.status(500).json(error);
        next(error);
    }
};
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            console.log('Hotel not found');
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(hotel);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};
export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        if (!hotels) {
            console.log('No Hotels found');
            return res.status(404).json({ message: 'No Hotels found' });
        }
        res.status(200).json(hotels);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};

export const countByCity = async (req, res, next) => { 
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};