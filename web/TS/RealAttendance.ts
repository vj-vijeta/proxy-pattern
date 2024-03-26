import { Attendance } from "./Attendance";

export class RealAttendance implements Attendance {
    markAttendance(): void {
        console.log("Attendance recorded.");
    }
}
