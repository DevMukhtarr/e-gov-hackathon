import mongoose from "mongoose";
const Schema = mongoose.Schema;

const state = new Schema({
    name: {type: String, default:null}
})

export default mongoose.model("State", state)