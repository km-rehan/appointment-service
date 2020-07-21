import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Appointment } from "src/models/appointment.model";
import { InjectModel } from "@nestjs/mongoose";
import { AppointmentOnline } from "src/models/appointment-online.model";
import { MedicalReports } from "src/models/medical-reports.model";


@Injectable()
export class NoSqlService {

    constructor(
       @InjectModel(Appointment.name) private readonly appointmentModel: Model<Appointment>,
       @InjectModel(AppointmentOnline.name) private readonly appointmenmtOnlineModel: Model<AppointmentOnline>,
       @InjectModel(MedicalReports.name) private readonly medicalReportModel: Model<MedicalReports>
    ) {

    }


    public getAppointmentModel(): Model<Appointment> {
        return this.appointmentModel;
    }

    public getAppointmentOnlineModel(): Model<AppointmentOnline> {
        return this.appointmenmtOnlineModel;
    }

    public getMedicalReportsModel(): Model<MedicalReports> {
        return this.medicalReportModel;
    }
}