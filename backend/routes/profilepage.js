import express from "express";
import {
  getAllMilestones,
  createMilestone,
} from "../controller/profilepagecontoller.js";

const router = express.Router();

router.get("/", getAllMilestones);
router.post("/", createMilestone);

export default router;
