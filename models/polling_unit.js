import mongoose from "mongoose";
import ward from "./ward";
const Schema = mongoose.Schema;

const polling_unit = new Schema({
    ward_id: {type: Schema.Types.ObjectId, ref: ward, required: true},
    polling_unit_name: {type: String, default:null}
})

export default mongoose.model("PollingUnit", polling_unit)