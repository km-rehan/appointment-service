import { Document, Schema } from "mongoose";


export class Appointment extends Document {

    userId: string;

    doctorId: string;

    patientname: string;

    mobile: string;

    patientMobile: string;

    email: string;

    patientEmail: string;

    patientLocation: string;

    forTreatment: string;

    timeslot: string;

    datetime: string;

    isPatient: true;
}

export const AppointmentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    patientname: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    patientMobile: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    patientEmail: {
        type: String,
        required: true
    },
    
    patientLocation: {
        type: String,
        required: true
    },

    forTreatment: {
        type: String,
        required: true
    },

    timeslot: {
        type: String,
        required: true
    },

    datetime: {
        type: Date,
        required: true
    },

    isPatient: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})