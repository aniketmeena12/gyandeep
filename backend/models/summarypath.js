import mongoose from "mongoose";

const SummarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: String, required: true },
  points: [{ type: String, required: true }],
  timestamp: { type: String, default: () => new Date().toLocaleString() },
  color: { type: String, default: "#FFD95A" },
});

export default mongoose.model("Summary", SummarySchema);
