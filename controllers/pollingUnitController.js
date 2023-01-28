import PollingUnit from "../models/polling_unit.js";
import Ward from "../models/ward.js";

export const addPollingUnit = async ( req, res ) => {
    try {
        const { 
            name,
            location,
            ward_id
        } = req.body

        const ward = await Ward.findById(ward_id);

        if(ward == null){
            return res.json({
                message: "This ward does not exist"
            })
        }
        
        await PollingUnit.create({
            name,
            location,
            ward_id
        })

        return res.json({
            message: "Polling unit added successfully"
        })

    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}

export const getPollingUnits = async (req, res) => {
    try {
        const polling_units = PollingUnit.find();
        return res.json({
            message: "All polling units",
            data: polling_units
        })
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}