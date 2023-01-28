import mongoose from "mongoose";
const Schema = mongoose.Schema;

const constituency = new Schema({
    name: {type: String, default:null},
    senatorial_district_id: {type: mongoose.Types.ObjectId, ref:"SD"},
    state_id: {type: mongoose.Types.ObjectId, ref:"State"}
})

export default mongoose.model("Constituency", constituency)