import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ward = new Schema({
    name: {type: String, default:null},
    polling_unit: [{type: String, default: null}],
    
})

export default mongoose.model("Ward", ward)