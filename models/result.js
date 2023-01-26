import mongoose from "mongoose";
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< Updated upstream
})
=======
import user from "./user.js";
=======
// import user from "./user.js";
>>>>>>> b2d20b8
const Schema = mongoose.Schema;

const result = new Schema({
    agent: {type: String, default: null},
    scores: [ {party: { type: String, default: null}, score: { type: Number, default: null}}],
    registered_voters: {type: Number},
    accredited_voters: {type: Number},
    valid_votes: {type: Number},
    invalid_votes: {type: Number},
    election_type: {type: String, default: null},
<<<<<<< HEAD
=======
    polling_unit: {type: String, default: null},
    
>>>>>>> b337ff2d4309d2a4039d8039f0e984e6fd2e206b
})
<<<<<<< HEAD

>>>>>>> b337ff2d4309d2a4039d8039f0e984e6fd2e206b
=======
}) 
>>>>>>> Stashed changes
=======
>>>>>>> b2d20b8
export default mongoose.model("Result", result)