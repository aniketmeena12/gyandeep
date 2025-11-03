import { Node } from "../models/Node.js";

// 🟢 Get all nodes
export const getAllNodes = async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json(nodes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟡 Create a new node
export const createNode = async (req, res) => {
  try {
    const newNode = new Node(req.body);
    await newNode.save();
    res.status(201).json(newNode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔵 Update a node (status, description, etc.)
export const updateNode = async (req, res) => {
  try {
    const updatedNode = await Node.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedNode) {
      return res.status(404).json({ error: "Node not found" });
    }

    res.json(updatedNode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
