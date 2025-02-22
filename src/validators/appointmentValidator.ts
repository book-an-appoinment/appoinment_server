import { z } from 'zod';

export const appointmentSchema = z.object({
    fullname: z.string().min(3, "Full name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    service: z.enum([
        'Financial Service', 'Task Control', 'Financial Growth', 'Capital Investments'
    ]),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    subject: z.string().min(5, "Subject must be at least 5 characters long"),
    date: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date format"),
    time: z.string().regex(/^(0?[1-9]|1[0-2]):[0-5][0-9] ?(AM|PM)$/i, "Invalid time format (HH:MM AM/PM)"),
    message: z.string().optional()
});