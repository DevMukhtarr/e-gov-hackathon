import mongoose from "mongoose";
import party from "./party";
const Schema = mongoose.Schema;

const candidate = new Schema({
    party_id : {type: Schema.Types.ObjectId, ref: party, required: true},
    name: {type: String, default:null},
    party: {type: String, default:null},
    picture: {type: String, default:null},
    aspired_position: {type: String, default:null},
    constituency: {type: String, default:null}
})

export default mongoose.model("Candidate", candidate)