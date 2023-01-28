import mongoose from "mongoose";
import User from "./user.js";
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: Schema.Types.ObjectId, ref: User, required: true},
    scores: [ {party: { type: String, default: null}, score: { type: Number, default: null}}],
    registered_voters: {type: Number},
    accredited_voters: {type: Number},
    valid_votes: {type: Number},
    invalid_votes: {type: Number},
    election_type: {type: String, default: null},
    submission_date: {type: Date, default: Date.now()}
})

export default mongoose.model("Result", result)