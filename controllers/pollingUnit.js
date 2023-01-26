import polling_unit from "../models/polling_unit.js";

export const addPollingUnit = async ( req, res ) => {
    try {
        const { 
            name,
            location
        } = req.body

        if(!(name && location)){
            return res.json({
                message: "all fields can not be empty"
            })
        }

        await polling_unit.create({
            name,
            location
        })
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}

export const getPollingUnits = async (req, res) => {
    try {
        const polling_units = polling_unit.find();
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