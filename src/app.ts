import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
   res.send(" wel copme to express ");
});

// Auth routes

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
   console.error(err); // Log the full error object for detailed information

   const statusCode = err.statusCode || 500;

   res.status(statusCode).json({
      errors: [
         {
            type: err.name,
            msg: err.message,
            location: "", // Could be used for request-related location info, if applicable
            path: req.path, // Provide the path for better context
         },
      ],
   });
});

export default app;