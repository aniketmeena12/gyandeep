import express from "express";
import { Node } from "../models/Node.js";

const router = express.Router();

// Get all nodes
router.get("/", async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json(nodes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a node
router.post("/", async (req, res) => {
  try {
    const newNode = new Node(req.body);
    await newNode.save();
    res.status(201).json(newNode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update node (status, description, etc.)
router.put("/:id", async (req, res) => {
  try {
    const updatedNode = await Node.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedNode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
