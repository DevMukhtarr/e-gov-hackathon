import mongoose from "mongoose";
import constituency from "./constituency";
const Schema = mongoose.Schema;

const local_government_area = new Schema({
    constituency_id: {type: Schema.Types.ObjectId, ref: constituency, required: true},
    name: {type: String, default:null}
})

export default mongoose.model("LGA", local_government_area)