import Message from "../models/Message.js";

// 📥 Get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✉️ Add a new message
export const addMessage = async (req, res) => {
  try {
    const { type, content } = req.body;

    if (!type || !content) {
      return res.status(400).json({ error: "Type and content are required" });
    }

    const newMessage = new Message({ type, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
