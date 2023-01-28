import State from '../models/state.js';
import mongoose from "mongoose";
const toID = mongoose.Types.ObjectId;


export const addState = async(req, res) =>{
    try {
        const { 
            name
        }= req.body

        await State.create({
            name
        })
        return res.json({
            message: "State added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getAllStates = async (req, res) => {
    try{
        const states =  await State.find()

        return res.json({
            data: states
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}