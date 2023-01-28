import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SenatorialDistrict = new Schema({
    name: {type: String, default: null},
    state_id: {type: mongoose.Types.ObjectId, ref:"State"},
})

export default mongoose.model("SD", SenatorialDistrict)