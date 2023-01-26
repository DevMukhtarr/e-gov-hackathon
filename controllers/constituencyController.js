import { json } from "express";
import constituency from "../models/constituency.js";


export const addConstituency = async(req, res) =>{

    try {
        const { 
            name,
            local_government_areas,
        }= req.body

        if (!(name && local_government_areas)){
            return json({
                message: "All fields are required"
            })
        }
        await constituency.create({
            name,
            local_government_areas
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

export const getAllConstituency = async (req, res) => {
    try{
        const constituencies =  await constituency.find()

        return res.json({
            data: constituencies
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}