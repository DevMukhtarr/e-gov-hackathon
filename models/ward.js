import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ward = new Schema({
    lga_id: {type: Schema.Types.ObjectId, ref: lGA, required: true},
    ward_name: {type: String, default:null}
    
})

export default mongoose.model("Ward", ward)