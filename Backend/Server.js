import express from "express";
import { connectDatabase } from "./Db/DbConnection.js";

import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

connectDatabase();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
