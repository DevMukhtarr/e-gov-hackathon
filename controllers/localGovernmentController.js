import LGA from "../models/local_government_area.js";
import State from "../models/state.js";
import Constituency from "../models/constituency.js";

export const addLocalGovernmentArea = async (req, res) => {
    try {
        const { 
            name,
            state_id,
            constituency_id
         } = req.body

         const state = await State.findById(state_id);
         const constituency = await Constituency.findById(constituency_id);

         if(state == null){
            return res.json({
                message: "State id does not exist"
            })
         }

         if(constituency == null){
            return res.json({
                message: "Constituency id does not exist"
            })
         }

        await LGA.create({
            name,
            state_id,
            constituency_id
        })
        return res.json({
            message: "Local government Added successfully"
        })
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}

export const getLocalGovernments = async (req, res) =>{
    try {

        const localGovernments = await LGA.find();

        return res.json({
            message: "All Local Governments",
            data: localGovernments
        })
        
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}

export const getLocalGovernmentsByStateId = async ( req, res) =>{
    try {
        // const local_governments = 
        const localGovernments = await LGA.find({stateid: req.params.stateid})
        return res.json({
            message: "All LocalGovernments",
            data: localGovernments
        })
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}