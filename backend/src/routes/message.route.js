import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
// Gets the id of the user for message history
router.get("/:id", protectRoute, getMessages);
// Send messages
router.post("/send/:id", protectRoute, sendMessage);

export default router;
