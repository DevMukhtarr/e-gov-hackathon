import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {type: String, default:null},
    last_name: {type: String, default:null},
    middle_name: {type: String, default:null},
    email: {type: String, default:null},
    state: {type: String, default:null},
    password: {type: String, default:null},
    date_of_birth: {type: String, default:null},
    date_created: {type: Date, default: Date.now},
    date_modified: {type: Date, default: Date.now},
    gender: {type: String, default:null},
    picture: {type: String, default:null},
    local_government_area: {type: String, default:null},
    picture: {type: String, default:null},
    polling_unit: {type: String, default:null},
    role: {
    type: String,
    required: true,
    enum: ['admin','agent']
    },
    is_active: {type: Boolean, default:false},
});

export default mongoose.model("User", userSchema);