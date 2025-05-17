/**
 * Error handling utilities for Vercel serverless functions
 */

// Custom error class with additional context
export class AppError extends Error {
  constructor(message, statusCode = 500, details = {}) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handler middleware for Express
export const errorHandler = (err, req, res, next) => {
  console.error('Server error:', err);
  
  // Default status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  
  // In production, don't leak error details
  const details = process.env.NODE_ENV === 'production' 
    ? {} 
    : {
        stack: err.stack,
        details: err.details || {}
      };
  
  res.status(statusCode).json({
    success: false,
    message,
    ...details
  });
};

// Wrapper for async route handlers to avoid try/catch blocks
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
