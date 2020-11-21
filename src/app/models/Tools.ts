import mongoose from "mongoose";

const ToolSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        default: "",
        type: String,
    },
    description: {
        default: "",
        type: String,
    },
    tags: {
        default: [],
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("Tool", ToolSchema);
