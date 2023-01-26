import result from "../models/result.js";

export const addResult = async (req, res) =>{
    try {
        const { 
            agent, 
            scores, 
            registered_voters, 
            accredited_voters, 
            valid_votes, 
            invalid_votes, 
            election_type,
            } = req.body
        
            if(!(agent && scores && registered_voters && accredited_voters && valid_votes && invalid_votes && election_type && polling_unit)){
                return res.json({
                    message: "all inpus cannot be empty"
                })
            }
        
            await result.create({
                agent,
                scores,
                registered_voters,
                valid_votes,
                invalid_votes,
                election_type,
                polling_unit
            })
        
            return res.json({
                message: "result submitted successfully"
            })
        } catch (error) {
            return res.json({
                message: "An error occurred" + error
            })
    }
}

