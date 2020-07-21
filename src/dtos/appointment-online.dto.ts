export interface AppointmentOnlineDto {
    userId: string,
    doctorId: string,
    consultVideoid: string,
    patientName: string,
    mobile: string,
    patientMobile: string,
    email: string,
    patientLocation: string,
    forTreatment: string,
    timeslot: string,
    datetime: Date,
    consultstarttime: Date,
    consultendtime: Date,
    patientdocuments: string[],
    isConsultationStarted: boolean,
    isPatient: boolean
}