import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            isAdmin: req.body.isAdmin,
        })

        await newUser.save();
        res.status(200).send("User has been created.")
    }
    catch (error) {
        res.status(500).json(error);
    }
}



export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ message: "User not found!" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send("Wrong password or email!");
        }
        else {
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY);

            const { password, email, ...otherDetails } = user._doc;
            res
                .cookie("access_token", token, { httpOnly: true, })
                .status(200)
                .send(user);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}