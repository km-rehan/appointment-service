import { Document, Schema } from "mongoose";


export class AppointmentOnline extends Document {
    userId: string;
    doctorId: string;
    consultVideoid: string;
    patientName: string;
    mobile: string;
    patientMobile: string;
    email: string;
    patientLocation: string;
    forTreatment: string;
    timeslot: string;
    datetime: Date;
    consultstarttime: Date;
    consultendtime: Date;
    patientdocuments: string[];
    isConsultationStarted: boolean;
    isPatient: boolean;
}

export const AppointmentOnlineSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },

    doctorId: {
        type: String,
        required: true,
    },
    
    consultVideoid: {
        type: String,
        required: true
    },

    patientName: {
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


    consultstarttime: {
        type: Date,
        required: true
    },


    consultendtime: {
        type: Date,
        required: true
    },

    patientdocuments: {
        type: [String],
        required: false
    },

    isConsultationStarted: {
        type: Boolean,
        default: false
    },
    
    isPatient: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});