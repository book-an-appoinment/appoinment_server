import { Request, Response } from 'express';
import { AppointmentService } from '../services/AppointmentService';
import { appointmentSchema } from '../validators/appointmentValidator';
import Appointment, { IAppointment } from "../model/Appointment.model"
import { parse, format } from 'date-fns';


export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor(appointmentService: AppointmentService) {
        this.appointmentService = appointmentService;
    }

    async createAppointment(req: Request, res: Response): Promise<void> {
        try {
            const validatedData = appointmentSchema.parse(req.body);

            const parsedTime = parse(validatedData.time, 'h:mm a', new Date());
            validatedData.time = format(parsedTime, 'HH:mm');

            const appointment = new Appointment(validatedData);
            const savedAppointment = await this.appointmentService.createAppointment(appointment);
            res.status(201).json({ success: true, data: appointment });
        } catch (error:unknown) {
            if(error instanceof Error) {

                res.status(500).json({ success: false, error: error.message  });
            } else {
                console.error("unknown error", error)
            }
        }
    }

   


    async getAppointments(req: Request, res: Response): Promise<void> {
        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;
            const { appointments, total } = await this.appointmentService.getAppointments(page, limit);
            res.status(200).json({ 
                success: true, 
                data: appointments,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error:any) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async deleteAppointment(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.appointmentService.deleteAppointment(id);
            res.status(200).json({ success: true, message: 'Appointment deleted successfully' });
        } catch (error:any) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
}
