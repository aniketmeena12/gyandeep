import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a message
router.post("/", async (req, res) => {
  try {
    const { type, content } = req.body;
    const newMessage = new Message({ type, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
