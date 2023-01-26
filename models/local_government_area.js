import mongoose from "mongoose";
import constituency from "./constituency.js";
const Schema = mongoose.Schema;

const local_government_area = new Schema({
    constituencies: [{type: String, default:null}],
    name: {type: String, default:null},
    wards: [{type: String, default:null}]
})

export default mongoose.model("LGA", local_government_area)