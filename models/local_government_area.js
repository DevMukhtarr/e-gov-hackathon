import mongoose from "mongoose";
const Schema = mongoose.Schema;

const local_government_area = new Schema({
    name: {type: String, default:null},
    state_id: {type: mongoose.Types.ObjectId, ref: 'State'},
    constituency_id: {type: mongoose.Types.ObjectId, ref: 'Constituency'}
})

export default mongoose.model("LGA", local_government_area)