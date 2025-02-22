// src/models/Appointment.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
    fullname: string;
    email: string;
    service: string;
    phone: string;
    subject: string;
    date: Date;
    time: string;
    message: string;
}

const AppointmentSchema: Schema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, enum: [
        'Financial Service', 'Task Control', 'Financial Growth', 'Capital Investments', 'Task Control'
    ], required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    message: { type: String, required: false }
}, { timestamps: true });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);