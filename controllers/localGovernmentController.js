import local_government_area from "../models/local_government_area.js";

export const addLocalGovernmentArea = async () => {
    try {
        const { 
            constituencies,
            name,
            wards,
         } = req.body

         if(!(name  && constituencies && wards)){
            return res.json({
                message: "all fields can not be empty"
            })
        }

        local_government_area.create({
            constituencies,
            name,
            wards,
        })
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}

export const getLocalGovernments = async (req, res) =>{
    try {

        const localGovernments = await local_government_area.find();

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