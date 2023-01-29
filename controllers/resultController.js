import result from "../models/result.js";
import Election from "../models/election.js";

export const addResult = async (req, res) =>{
    try {
        const user_role  = req.user.role;
        
        if(user_role !== "admin" && user_role !== "agent"){
            return res.json({
                message: "access is restricted"
            })
        }

        const { 
            agent, 
            scores, 
            registered_voters, 
            accredited_voters, 
            valid_votes, 
            invalid_votes, 
            election_type,
            } = req.body
        
            if(!(agent && scores && registered_voters && accredited_voters && valid_votes && invalid_votes && election_type )){
                return res.json({
                    message: "all inputs cannot be empty"
                })
            }

            const new_result = await result.create({
                agent,
                scores,
                registered_voters,
                valid_votes,
                invalid_votes,
                election_type,
            })
        
            const election = await Election.find({type: election_type});

            const last_election = election[election.length - 1];

            await last_election.updateOne(
                {$push: { results: new_result._id }}
                )

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
        const results = await result.find()
        .populate({path: 'agent', select: "first_name state polling_unit"})
        // .populate({path: 'polling_unit'})
        ;

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