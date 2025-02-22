import { Request, Response, Router } from 'express';
import { AppointmentController } from '../controllers/AppointmentController';
import { AppointmentService } from '../services/AppointmentService';

const router = Router();
const appointmentService = new AppointmentService();
const appointmentController = new AppointmentController(appointmentService);

router.post('/appointments', (req:Request, res:Response) => appointmentController.createAppointment(req, res));
router.get('/appointments', (req:Request, res:Response) => appointmentController.getAppointments(req, res));

router.delete('/appointments/:id', (req:Request, res:Response) => appointmentController.deleteAppointment(req, res));


export default router;
