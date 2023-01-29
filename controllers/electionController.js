import Election from "../models/election.js";
import Result from "../models/result.js";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const addElection = async (req, res) => {
    const user_role  = req.user.role;
    
    if(user_role != "admin"){
        return res.json({
            message: "access is restricted"
        })
    }
    try {
    const {
        type,
        year,
        start_date,
    } = req.body

    await Election.create({
        type,
        year,
        start_date,
    })
    
    return res.json({
        message: "Election Added successfully"
    })    

    } catch (error) {
        return res.json({
            message: "An error occurred" + error
        })    
    }
}

export const updateElectionEndDate = async (req, res) => {
    try {
        if(user_role != "admin"){
            return res.json({
                message: "access is restricted"
            })
        }

        const { election_id, end_date } = req.body;

        const election = await Election.findById(election_id);

        if(election == null){
            return res.json({
                message: "Election Does not exist"
            }) 
        }

        await election.updateOne({
            end_date
        });
        
        return res.json({
            message: "End Date Updated Successfully"
        }) 

    } catch (error) {
        return res.json({
            message: "An error occurred" + error
        })   
    }
}

export const getElections = async (req, res) => {
    try {
        let all_ids = []
        const { year, type } = req.body;
        const election  = await Election.find({year: year, type: type});

        
        if(election[0].type == "presidential"){
            const result_ids = election[0].results;
            all_ids = result_ids;

        const found_results = await Result.find({ _id: { $in: all_ids } });

          const result = found_results.reduce((acc, obj) => {
            obj.scores.forEach(score => {
              if (acc[score.party]) {
                acc[score.party].score += score.score;
              } else {
                acc[score.party] = {party: score.party, score: score.score};
              }
            });
            return acc;
          }, {});

        const final_result = Object.values(result);

        const registered_voters = found_results.reduce((acc, obj) =>
        acc + obj.registered_voters, 0)
            
        const accredited_voters = found_results.reduce((acc, obj) =>
            acc + obj.accredited_voters, 0)
            
        const valid_votes = found_results.reduce((acc, obj) =>
            acc + obj.valid_votes, 0)
            
        const invalid_votes = found_results.reduce((acc, obj) =>
            acc + obj.invalid_votes, 0)

        return res.json({
            election_type: election[0].type,
            year: election[0].year,
            start_date: election[0].start_date,
            end_date: election[0].end_date,
            conclusion: election[0].conclusion,
            result: final_result,
            registered_voters: registered_voters,
            accredited_voters: accredited_voters,
            valid_votes: valid_votes,
            invalid_votes: invalid_votes
        })
    }
    } catch (error) {
        return res.json({
            message: "An error occurred" + error
        })   
    }
}