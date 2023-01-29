import mongoose from "mongoose";
import Result from "./result.js";
const Schema = mongoose.Schema;

const election = new Schema({
    type: {type: String, default: null},
    year: {type: String, default: null},
    start_date: {type: String, default: null},
    end_date: {type: String, default: null},
    conclusion: {type: String, default: "not_started", enum:['not_started','completed', 'inconclusive', 'cancelled', 'tie']},
    results: [       
        {type: Schema.Types.ObjectId, ref: Result, required: true}
        ]
})

export default mongoose.model("Election", election)