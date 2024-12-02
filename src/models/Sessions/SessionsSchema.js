import mongoose from "mongoose";
const SessionsSchema = new mongoose.Schema.Types({
    token:{type:String},
    association :{type:String},
});
export const Sessions = mongoose.model("sessions", SessionsSchema)