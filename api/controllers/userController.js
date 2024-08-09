import User from "../models/User.js";

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error('Error updating User:', error);
        res.status(500).json(error);
    }
};
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    }
    catch (error) {
        console.error('Error deleting User:', error);
        res.status(500).json(error);
    }
};
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!User) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users) {
            console.log('No Users found');
            return res.status(404).json({ message: 'No Users found' });
        }
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
        next(error);
    }
};