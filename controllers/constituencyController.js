import { json } from "express";
import Constituency from "../models/constituency.js";
import State from "../models/state.js";
import Sd from "../models/senatorial_district.js";


export const addConstituency = async(req, res) =>{
    try{
        const { name, senatorial_district_id, state_id } =  req.body

        const senatorial_district = await Sd.findById(senatorial_district_id);
        const state = await State.findById(state_id);


        if (senatorial_district == null){
            return res.json({
                message: "Senatorial District does not exist"
            })
        }
        
        if (state == null){
            return res.json({
                message: "State does not exist"
            })
        }

        await Constituency.create({
            name: name,
            senatorial_district_id: senatorial_district_id,
            state_id: state_id
        })

        return res.json({
            message: "Constituency Created successfully"
        })
        
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getConstituencyById = async (req, res) => {

}

export const getAllConstituency = async (req, res) => {
    
}