import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import queryRouter from "./api/queryGen/index.js";
import queryParser from "./api/resultParser/index.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json()); 

// Mount the query router under a specific path prefix
app.use("/api", queryRouter);
app.use("/api", queryParser);
// With this setup, the full route will be /api/query

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment variables loaded: PORT=${process.env.PORT}, DB=${process.env.DATABASE_URL ? 'Connected' : 'Not connected'}`);
});