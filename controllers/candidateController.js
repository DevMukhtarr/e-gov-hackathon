import candidate from "../models/candidate.js";

export const addCandidate = async (req, res) =>{
    try {
        const {
                name,
                party, 
                picture, 
                aspired_position, 
                constituency 
            } = req.body;   

            if(!(name  && party && picture && aspired_position && constituency)){
                return res.json({
                    message: "all fields can not be empty"
                })
            }
            
            await candidate.create({
                name,
                party, 
                picture, 
                aspired_position, 
                constituency 
            })
            return res.json({
                message: "Candidate added successfully"
            })

    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
    
}

export const getCandidates = async (req, res) =>{
    try {

        const candidates = await candidate.find();

        return res.json({
            message: "All candidates",
            data: candidates
        })

        
    } catch (error) {
        return res.json({
            message: "A server error occurred" + error
        })
    }
}