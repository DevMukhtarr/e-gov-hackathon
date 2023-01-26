import mongoose from "mongoose";
const Schema = mongoose.Schema;

const party = new Schema({
    name: {type: String, default: null},
    logo: {type: String, default: null},
})

export default mongoose.model("Party", party)