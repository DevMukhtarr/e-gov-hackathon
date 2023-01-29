import Incidence from "../models/incidence.js";

export const addIncidence = async (req, res) => {
    try {
        const { agent, type, date_and_time, pictures} = req.body

        
        
    } catch (error) {
        return res.json({
            message: "access is restricted "+ error
        })
    }
}