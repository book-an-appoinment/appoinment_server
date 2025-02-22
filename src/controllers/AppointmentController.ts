import { Request, Response } from 'express';
import { AppointmentService } from '../services/AppointmentService';

export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor(appointmentService: AppointmentService) {
        this.appointmentService = appointmentService;
    }

    async createAppointment(req: Request, res: Response): Promise<void> {
        try {
            const appointment = await this.appointmentService.createAppointment(req.body);
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
}
