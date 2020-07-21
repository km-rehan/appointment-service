import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { NoSqlService } from "./no-sql.service";
import { AppointmentDto } from "../dtos/appointment.dto";
import { AppointmentOnlineDto } from "src/dtos/appointment-online.dto";
import { MedicalReportsDto } from "src/dtos/medical-reports.dto";


@Injectable()
export class AppointmentService {

    constructor(private readonly noSqlService: NoSqlService) {

    }


    public async saveDoctorAppointment(appointmentDto: AppointmentDto): Promise<any> {
        try {
            const appointmentModel = this.noSqlService.getAppointmentModel();
            const appointment = await new appointmentModel(appointmentDto).save()
            if (!appointment) throw new HttpException("Failed to create an appointment", HttpStatus.CONFLICT);
            return {
                status: HttpStatus.CREATED,
                message: "Your appointment is scheduled sucessfully"
            }
        } catch (exception) {
            throw exception;
        }
    }

    public async saveDoctorOnlineAppointment(appointmentOnlineDto: AppointmentOnlineDto): Promise<any> {
        try {
            const appointmentOnlineModel = this.noSqlService.getAppointmentOnlineModel();
            const onlineAppointment = await new appointmentOnlineModel(appointmentOnlineDto).save();
            if (!onlineAppointment) throw new HttpException("Failed to create an online appointment", HttpStatus.CONFLICT);
            return {
                status: HttpStatus.CREATED,
                message: "Your online appointment is scheduled successfully"
            }
        } catch (exception) {
            throw exception;
        }
    }

    public async saveMedicalReports(medicalReportDto: MedicalReportsDto): Promise<any> {
        try {
            const medicalReportsModel = this.noSqlService.getMedicalReportsModel();
            const medicalReports = await new medicalReportsModel(medicalReportDto).save();
            if (!medicalReports) throw new HttpException("Failed to create an instance of medical report", HttpStatus.CONFLICT)
            return {
                status: HttpStatus.CREATED,
                message: "Successfully uploaded medical reports"
            }
        } catch (exception) {
            throw exception;
        }
    }

}