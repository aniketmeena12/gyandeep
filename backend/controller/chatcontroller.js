import Message from "../models/Message.js";

// 📥 Get all chat messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✉️ Post a new message
export const createMessage = async (req, res) => {
  try {
    const { sender, content } = req.body;

    if (!sender || !content) {
      return res.status(400).json({ error: "Sender and content are required" });
    }

    const newMessage = new Message({ sender, content });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
