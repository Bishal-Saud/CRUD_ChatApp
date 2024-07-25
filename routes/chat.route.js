import express from "express";
import { getMyProfile } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { newGroupChat } from "../controllers/chat.controller.js";
const app = express.Router();

//After here user must be logged in to access the routes
app.use(isAuthenticated);
app.post("/new", newGroupChat);
app.get("/profile", getMyProfile);

export default app;
