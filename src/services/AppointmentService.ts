import Appointment, { IAppointment } from "../model/Appointment.model";

export class AppointmentService {
    async createAppointment(data: IAppointment): Promise<IAppointment> {
        const appointment = new Appointment(data);
        return await appointment.save();
    }
    
    async getAppointments(): Promise<IAppointment[]> {
        return await Appointment.find();
    }

    async deleteAppointment(id: string): Promise<void> {
        await Appointment.findByIdAndDelete(id);
    }
}