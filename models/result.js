import mongoose from "mongoose";
<<<<<<< HEAD
import user from "./user.js";
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: Schema.Types.ObjectId, ref: user},
    scores: [{ party: { type: String, default: null }, score : {type: Number, default: null}}],
    registered_voters: {type: Number, default: null},
    accredited_voters: {type: Number, default: null},
    valid_votes: {type: Number, default: null},
    invalid_votes: {type: Number, default: null},
    election_type: {type: String, default: null},
    polling_unit: {type: String, default: null},
})

=======
import user from "./user";
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: Schema.Types.ObjectId, ref: user, required: true},
    scores: [{ type: String, default: null, type: Number}],
    registered_voters: {type: Number},
    accredited_voters: {type: Number},
    valid_votes: {type: Number},
    invalid_votes: {type: Number},
    election_type: {type: String, default: null},
})
>>>>>>> 9f56547 (wrote result schema)
export default mongoose.model("Result", result)