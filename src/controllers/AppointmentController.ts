import { Request, Response } from 'express';
import { AppointmentService } from '../services/AppointmentService';
import { appointmentSchema } from '../validators/appointmentValidator';
import Appointment from "../model/Appointment.model"


export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor(appointmentService: AppointmentService) {
        this.appointmentService = appointmentService;
    }

    async createAppointment(req: Request, res: Response): Promise<void> {
        try {
            const validatedData = appointmentSchema.parse(req.body);
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
            const appointments = await this.appointmentService.getAppointments();
            res.status(200).json({ success: true, data: appointments });
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
