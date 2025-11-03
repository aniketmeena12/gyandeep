// routes/messageRoutes.js
import express from "express";
import { getMessages, addMessage } from "../controller/aitutorcontroller.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", addMessage);

export default router;
