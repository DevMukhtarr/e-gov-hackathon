import mongoose from "mongoose";
const Schema = mongoose.Schema;

const incidenceResponse = new Schema({
    agent: {type: mongoose.Types.ObjectId, ref: 'User'},
    type: {type: String, default: null},
    date_and_time: {type: String, default: null},
    pictures: [{type: String, default: null}]
})

export default mongoose.model("Incidence", incidenceResponse)