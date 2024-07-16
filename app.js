import express from "express";

import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const MONGO_URI = process.env.MONGO_URI;
connectDB(MONGO_URI);
const app = express();

// Using middleware here
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

app.get("*", (req, res) => {
  res.send("good");
});

app.listen(PORT, () => {
  console.log(`App working on port http://localhost${PORT}`);
});
