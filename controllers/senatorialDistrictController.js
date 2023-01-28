import SD from "../models/senatorial_district.js"
import State from "../models/state.js"

export const addSenatorialDistrict = async(req, res) =>{
    try {
        const { 
            name,
            state_id
        }= req.body

        const state = await State.findById(state_id);

        if (state == null){
            return res.json({
                message: "State does not exist"
            })
        }

        await SD.create({
            name,
            state_id
        })

        return res.json({
            message: "Senatorial District added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getSenatorialDistricts = async (req, res) => {
    try{
        const senatorial_ditricts =  await SD.find()

        return res.json({
            "message": "all senatorial districts",
            data: senatorial_ditricts
        })
        
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getSenatorialDistrictById = async (req, res) => {
    try{
        const senatorial_ditrict_id =  req.params.id

        const senatorial_district = await SD.findById(senatorial_ditrict_id);

        if (senatorial_district == null){
            return res.json({
                message: "Senatorial District does not exist"
            })
        }

        return res.json({
            message: "Senatorial District",
            data: senatorial_district
        })
        
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}
