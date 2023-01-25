import mongoose from "mongoose";
const Schema = mongoose.Schema;

const constituency = new Schema({
    name: {type: String, default:null},
    local_government_areas: [{type: String, default:null}],
})

export default mongoose.model("Constituency", constituency)