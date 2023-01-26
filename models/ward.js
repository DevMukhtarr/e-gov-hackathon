import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ward = new Schema({
<<<<<<< HEAD
    ward_name: {type: String, default:null},
    polling_units: [{type: String, default:null}]
=======
    lga_id: {type: Schema.Types.ObjectId, ref: lGA, required: true},
    ward_name: {type: String, default:null}
    
>>>>>>> 9f56547 (wrote result schema)
})

export default mongoose.model("Ward", ward)