// routes/nodeRoutes.js
import express from "express";
import {
  getAllNodes,
  createNode,
  updateNode,
} from "../controller/learningpathcontroller.js";

const router = express.Router();

router.get("/", getAllNodes);
router.post("/", createNode);
router.put("/:id", updateNode);

export default router;
