import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    token: String,
    query: String
});

export default mongoose.models["session"] ?? mongoose.model("session", userSchema, "session");