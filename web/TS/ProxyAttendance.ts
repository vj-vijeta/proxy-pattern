import { Attendance } from "./Attendance";
import { RealAttendance } from "./RealAttendance";

export class ProxyAttendance implements Attendance {
    private realAttendance: RealAttendance;
    private accessKey: string;

    constructor(realAttendance: RealAttendance, accessKey: string) {
        this.realAttendance = realAttendance;
        this.accessKey = accessKey;
    }

    markAttendance(): void {
        if (this.checkAccess()) {
            this.realAttendance.markAttendance();
        } else {
            console.log("Attendance not recorded. Access key invalid.");
        }
    }

    private checkAccess(): boolean {
        // Simulating access control logic
        const enteredKey = "1234"; // This would usually be provided by the student
        return enteredKey === this.accessKey;
    }
}
