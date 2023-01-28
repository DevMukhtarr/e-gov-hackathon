import Ward from '../models/ward.js';
import LGA from '../models/local_government_area.js';


export const addWard = async(req, res) =>{
    const user_role  = req.user.role;
    
    if(user_role != "admin"){
        return res.json({
            message: "access is restricted"
        })
    }
    try {
        const { 
            name,
            lga_id,
        }= req.body

        const local_government = await LGA.findById(lga_id);

        if(local_government == null){
            return res.json({
                message: "Local goverment does not exist"
            })
        }

        await Ward.create({
            name,
            local_government_area_id: lga_id
        })

        return res.json({
            message: "Ward added successfully"
        })
    } catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}

export const getAllWards = async (req, res) => {
    try{
        const wards =  await Ward.find()

        return res.json({
            data: wards
        })
    }catch(error){
        return res.json({
            message: "An error occurred: " + error
        })
    }
}