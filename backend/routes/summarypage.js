// routes/summaryRoutes.js
import express from "express";
import {
  getAllSummaries,
  createSummary,
  deleteSummary,
} from "../controller/summarypagecontroller";

const router = express.Router();

router.get("/", getAllSummaries);
router.post("/", createSummary);
router.delete("/:id", deleteSummary);

export default router;
