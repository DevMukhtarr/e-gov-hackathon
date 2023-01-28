import mongoose from "mongoose";
const Schema = mongoose.Schema;

const candidate = new Schema({
    name: {type: String, default:null},
    party: {type: String, default:null},
    pictures: {type: String, default:null},
    aspired_position: {type: String, default:null},
    constituency: {type: String, default:null}
})

export default mongoose.model("Candidate", candidate)