import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: String,
  type: {
    type: String,
    enum: ["achievement", "lesson", "milestone"],
    default: "lesson",
  },
});

export const Milestone = mongoose.model("Milestone", milestoneSchema);
