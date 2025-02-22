import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import cors from 'cors';
import appointmentRoutes from "./routes/appointmentRoutes";





const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.use('/api', appointmentRoutes);

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