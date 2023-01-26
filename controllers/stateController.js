import { json } from "express";
import state from '../models/state.js';


export const addState = async(req, res) =>{

    try {
        const { 
            name,
            local_government_areas,
            constituencies,
            wards,
            polling_units,
        }= req.body

        if (!(name && local_government_areas && constituencies && wards && polling_units)){
            return json({
                message: "All fields are required"
            })
        }
        await state.create({
            name,
            local_government_areas,
            constituencies,
            wards,
            polling_units,
        })
        return res.json({
            message: "Constituency added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getAllStates = async (req, res) => {
    try{
        const states =  await state.find()

        return res.json({
            data: states
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}