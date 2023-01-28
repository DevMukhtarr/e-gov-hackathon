import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ward = new Schema({
    name: {type: String, default:null},
    local_government_area_id: {type: mongoose.Types.ObjectId, ref: 'LGA'},
})

export default mongoose.model("Ward", ward)