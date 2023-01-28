import mongoose from "mongoose";
const Schema = mongoose.Schema;

const polling_unit = new Schema({
    name: {type: String, default:null},
    location: {
        latitude: {type: String, default:null}, 
        longitude: {type: String, default:null}
    },
    ward_id: {type: mongoose.Types.ObjectId, ref: 'Ward'}
})

export default mongoose.model("PollingUnit", polling_unit)