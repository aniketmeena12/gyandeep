import Summary from "../models/Summary.js";

// 🟢 Get all summaries
export const getAllSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find().sort({ _id: -1 });
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟡 Create new summary
export const createSummary = async (req, res) => {
  try {
    const summary = new Summary(req.body);
    const saved = await summary.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔴 Delete a summary
export const deleteSummary = async (req, res) => {
  try {
    await Summary.findByIdAndDelete(req.params.id);
    res.json({ message: "Summary deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
