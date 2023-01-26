import ward from '../models/ward.js';
import { json } from "express";


export const addWard = async(req, res) =>{

    try {
        const { 
            name,
            polling_unit,
        }= req.body

        if (!(name && polling_unit)){
            return json({
                message: "All fields are required"
            })
        }
        await ward.create({
            name,
            polling_unit
        })
        return res.json({
            message: " Ward added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getAllWards = async (req, res) => {
    try{
        const wards =  await ward.find()

        return res.json({
            data: wards
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}