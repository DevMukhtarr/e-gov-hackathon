import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import PollingUnit from '../models/polling_unit.js'
import State from "../models/state.js";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const signup = async (req, res) => {
    try {
        const { 
            first_name,
            last_name,
            middle_name,
            email,
            password,
            date_of_birth,
            gender,
            picture,
            polling_unit,
            role
        } = req.body
        // check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'A user with that email already exists' });
        }

        if(role == "agent"){
            const check_polling_unit = await PollingUnit.findById(polling_unit);
    
            if(check_polling_unit == null){
                return res.json({
                    message: "Polling unit does not exist"
                })
            }
        }

        const encryptedPassword = await bcrypt.hash(password, 12);
        // create a new user
        const user = new User({
            first_name,
            last_name,
            middle_name,
            email,
            password : encryptedPassword,
            date_of_birth,
            gender,
            picture,
            polling_unit,
            role
        });

        // save the user to the database
        await user.save();

        // create a JWT with the user's id and email in the payload
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET_KEY);

        // send a response to the client
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signin = async (req, res) => {
    try {
        // check if user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // check if the password is correct
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // create a JWT with the user's id and email in the payload
        const token = jwt.sign({ id: user._id, email: user.email, role:user.role }, JWT_SECRET_KEY);

        // send the JWT as a response
        res.status(200).json({ message: 'Signin successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};