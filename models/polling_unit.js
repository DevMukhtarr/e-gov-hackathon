import mongoose from "mongoose";
const Schema = mongoose.Schema;

const polling_unit = new Schema({
    name: {type: String, default:null},
    location: {type: String, default:null}
})

export default mongoose.model("PollingUnit", polling_unit)