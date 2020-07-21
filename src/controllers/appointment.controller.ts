import { Controller } from "@nestjs/common";
import { AppointmentService } from "src/services/appointment.service";
import { MessagePattern } from "@nestjs/microservices";
import { AppointmentDto } from "src/dtos/appointment.dto";
import { AppointmentOnlineDto } from "src/dtos/appointment-online.dto";
import { MedicalReportsDto } from "src/dtos/medical-reports.dto";

@Controller("appointment")
export class AppointmentController {

    constructor(private readonly appointmentService: AppointmentService) {

    }

    @MessagePattern({
        cmd: 'book-appointment'
    })
    public async createNowAppointment(appointmentDto: AppointmentDto): Promise<any>{
        try {
            const response = await this.appointmentService.saveDoctorAppointment(appointmentDto);
            return response;
        } catch (exception) {
            throw exception;
        }
    }

    @MessagePattern({
        cmd: 'book-online-appointment'
    })
    public async createNewOnlineAppointment(appointmentOnlineDto: AppointmentOnlineDto): Promise<any> {
        try {
            const response = await this.appointmentService.saveDoctorOnlineAppointment(appointmentOnlineDto);
            return response;
        } catch (exception) {
            throw exception;
        }
    }

    @MessagePattern({
        cmd: 'upload-medical-reports'
    })
    public async uploadMedicakReports(medicalReportsDto: MedicalReportsDto): Promise<any> {
        try {
            const response = await  this.appointmentService.saveMedicalReports(medicalReportsDto);
            return response;
        } catch (exception) {
            throw exception;
        }
    }

}