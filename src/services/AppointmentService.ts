import Appointment, { IAppointment } from "../model/Appointment.model";

export class AppointmentService {
    async createAppointment(data: IAppointment): Promise<IAppointment> {
        const appointment = new Appointment(data);
        return await appointment.save();
    }
    
    async getAppointments(page: number = 1, limit: number = 10): Promise<{ appointments: IAppointment[], total: number }> {
        const skip = (page - 1) * limit;
        const appointments = await Appointment.find().skip(skip).limit(limit);
        const total = await Appointment.countDocuments();
        return { appointments, total };
    }

    async deleteAppointment(id: string): Promise<void> {
        await Appointment.findByIdAndDelete(id);
    }
}