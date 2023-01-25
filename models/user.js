import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    email: {type: String, default:null},
    role: {
        type: String,
        required: true,
        enum: ['admins','inec_official', 'agent', 'po']
    },
})

export default mongoose.model("User", user)