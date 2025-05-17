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
// Configure CORS for Vercel deployment
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://sql-command-agent.vercel.app', /\.vercel\.app$/, /localhost/] // Allow your frontend domain plus any Vercel subdomain
    : '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

// Handle basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});


// Mount the query router under a specific path prefix
app.use("/api", queryRouter);
app.use("/api", queryParser);
// With this setup, the full route will be /api/query

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
  });
});

// For traditional server environments
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment variables loaded: PORT=${process.env.PORT}, DB=${process.env.DATABASE_URL ? 'Connected' : 'Not connected'}`);
  });
}

// Export for Vercel serverless deployment
export default app;