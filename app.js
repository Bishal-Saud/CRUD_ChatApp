import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { createUser } from "./seeders/user.seeder.js";

dotenv.config({
  path: "./.env",
});

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
connectDB(MONGO_URI);

// createUser(10);
const app = express();

// Using middleware here
app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

app.get("*", (req, res) => {
  res.send("good");
});

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`App working on port http://localhost:${PORT}`);
});
