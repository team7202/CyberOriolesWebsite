import mongoose, { Schema } from 'mongoose';

const AnnouncementSchema = new Schema({
    title: String,
    description: String,
    createdAt: Date,
});

export default mongoose.models["announcement"] ?? mongoose.model("announcement", AnnouncementSchema, "announcement");
