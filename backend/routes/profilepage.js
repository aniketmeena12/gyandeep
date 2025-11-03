import express from "express";
import { Milestone } from "../models/Milestone.js";

const router = express.Router();

// Get all milestones
router.get("/", async (req, res) => {
  try {
    const milestones = await Milestone.find().sort({ id: -1 });
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a milestone
router.post("/", async (req, res) => {
  try {
    const milestone = new Milestone(req.body);
    await milestone.save();
    res.status(201).json(milestone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
