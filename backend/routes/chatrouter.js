import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Get all chat messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a new message
router.post("/", async (req, res) => {
  try {
    const { sender, content } = req.body;
    const newMessage = new Message({ sender, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
