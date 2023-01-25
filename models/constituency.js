import mongoose from "mongoose";
const Schema = mongoose.Schema;

const constituency = new Schema({
    state_id: {type: Schema.Types.ObjectId, ref: state, required: true},
    name: {type: String, default:null}
})

export default mongoose.model("Constituency", constituency)