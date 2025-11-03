import express from "express";
import Summary from "../models/Summary.js";

const router = express.Router();

// ✅ Get all summaries
router.get("/", async (req, res) => {
  try {
    const summaries = await Summary.find().sort({ _id: -1 });
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Add new summary
router.post("/", async (req, res) => {
  try {
    const summary = new Summary(req.body);
    const saved = await summary.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ Delete summary
router.delete("/:id", async (req, res) => {
  try {
    await Summary.findByIdAndDelete(req.params.id);
    res.json({ message: "Summary deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
