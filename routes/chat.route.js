import express from "express";
import { getMyProfile } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  addMembers,
  getMyChats,
  getMyGroups,
  leaveGroup,
  newGroupChat,
  removeMember,
} from "../controllers/chat.controller.js";
const app = express.Router();

//After here user must be logged in to access the routes
app.use(isAuthenticated);
app.post("/new", newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);
app.put("/addmembers", addMembers);
app.put("/removemember", removeMember);
app.delete("/leave/:id", leaveGroup);

// send Attachments
// get messages
// get chat details , rename,delete

export default app;
