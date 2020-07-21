import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NoSqlService } from "../services/no-sql.service";
import { Appointment, AppointmentSchema } from "src/models/appointment.model";
import { AppointmentOnline, AppointmentOnlineSchema } from "src/models/appointment-online.model";
import { MedicalReports, MedicalReportsSchema } from "src/models/medical-reports.model";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Appointment.name,
                schema: AppointmentSchema
            },
            {
                name: AppointmentOnline.name,
                schema: AppointmentOnlineSchema
            },
            {
                name: MedicalReports.name,
                schema: MedicalReportsSchema
            }
        ])
    ],
    exports: [NoSqlService],
    providers: [NoSqlService],
})
export class NoSqlModule {}