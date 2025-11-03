import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["completed", "current", "locked"],
    default: "locked",
  },
  angle: Number,
  distance: Number,
});

export const Node = mongoose.model("Node", nodeSchema);
