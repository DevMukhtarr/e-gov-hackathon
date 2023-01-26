import party from '../models/party.js';
import { json } from "express";


export const addParty = async(req, res) =>{

    try {
        const { 
            name,
            logo,
        }= req.body

        if (!(name && logo)){
            return json({
                message: "All fields are required"
            })
        }
        await party.create({
            name,
            logo
        })
        return res.json({
            message: " Party added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getAllParties = async (req, res) => {
    try{
        const parties =  await party.find()

        return res.json({
            data: parties
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}