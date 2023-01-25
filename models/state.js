import mongoose from "mongoose";
const Schema = mongoose.Schema;

const state = new Schema({
    name: {type: String, default:null},
    local_government_areas: [{type: String, default:null}],
    constituencies: [{type: String, default:null}],
    wards: [{type: String, default:null}],
    polling_units: [{type: String, default:null}]
})

export default mongoose.model("State", state)