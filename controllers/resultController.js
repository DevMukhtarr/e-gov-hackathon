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
                    message: "all inputs cannot be empty"
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
    
export const getResults = async (req, res) => {
    try {
        const results = await result.find();

        return res.json({
            message: "all results",
            data: results
        })

    } catch (error) {
        return res.json({
            message: "An error occurred" + error
        })
    }
}