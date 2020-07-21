import { Module } from "@nestjs/common";
import { AppointmentController } from "src/controllers/appointment.controller";
import { AppointmentService } from "src/services/appointment.service";
import { NoSqlModule } from "./no-sql.module";

@Module({
    imports: [
        NoSqlModule
    ],
    exports: [AppointmentService],
    providers: [AppointmentService],
    controllers: [AppointmentController],
})
export class AppointmentModules {}