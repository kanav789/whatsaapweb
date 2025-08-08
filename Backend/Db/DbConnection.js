import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Database connected successfully"))
      .catch((error) => console.error("Database connection failed:", error));
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
