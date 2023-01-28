import mongoose from "mongoose";
const Schema = mongoose.Schema;

const election = new Schema({
    type: {type: String, default: null},
    year: {type: String, default: null},
    start_date: {type: String, default: null},
    end_date: {type: String, default: null},
    conclusion: {type: String, default: null},
    result: [
                    {party: {type: String, default: null}}, 
                    {candidate: {type: String, default: null}},
                    {score: {type: Number, default: null}},
                 ]
})

export default mongoose.model("Election", election)