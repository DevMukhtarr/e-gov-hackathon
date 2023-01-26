import mongoose from "mongoose";
import user from "./user.js";
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: Schema.Types.ObjectId, ref: user, required: true},
    scores: [ {party: { type: String, default: null}, score: { type: Number, default: null}}],
    registered_voters: {type: Number},
    accredited_voters: {type: Number},
    valid_votes: {type: Number},
    invalid_votes: {type: Number},
    election_type: {type: String, default: null},
    polling_unit: {type: String, default: null},
})

export default mongoose.model("Result", result)