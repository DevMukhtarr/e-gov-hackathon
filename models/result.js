import mongoose from "mongoose";
import User from "./user.js";
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: Schema.Types.ObjectId, ref: User, required: true},
    scores: [ { party: { type: String, default: null}, score: { type: Number, default: null} }],
    registered_voters: {type: Number, default: 0},
    accredited_voters: {type: Number, default: 0},
    valid_votes: {type: Number, default: 0},
    invalid_votes: {type: Number, default: 0},
    election_type: {type: String, default: null},
    submission_date: {type: Date, default: Date.now()}
})

export default mongoose.model("Result", result)