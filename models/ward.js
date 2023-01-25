import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ward = new Schema({
    ward_name: {type: String, default:null},
    polling_units: [{type: String, default:null}]
})

export default mongoose.model("Ward", ward)