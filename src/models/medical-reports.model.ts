import { Document, Schema } from "mongoose";

export class MedicalReports  extends Document {
    userId: string;
    username: string;
    date: Date;
    reportType: string;
    reportTitle: string;
    reports: string[]
}


export const MedicalReportsSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },

    reportType: {
        type: String,
        required: true
    },

    reportTitle: {
        type: String,
        required: true
    },

    reports: {
        type: [String]
    }
})