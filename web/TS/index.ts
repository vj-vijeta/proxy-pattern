import { Attendance } from "./Attendance";
import { RealAttendance } from "./RealAttendance";
import { ProxyAttendance } from "./ProxyAttendance";

function studentAttendClass(attendance: Attendance) {
    attendance.markAttendance();
}

console.log("Student attempting to mark attendance with a real attendance system:");
const realAttendanceSystem = new RealAttendance();
studentAttendClass(realAttendanceSystem);

console.log("");

console.log("Student attempting to mark attendance with a proxy using an invalid access key:");
const proxyAttendanceSystem = new ProxyAttendance(realAttendanceSystem, "0000");
studentAttendClass(proxyAttendanceSystem);

console.log("");

console.log("Student attempting to mark attendance with a proxy using a valid access key:");
const validProxyAttendanceSystem = new ProxyAttendance(realAttendanceSystem, "1234");
studentAttendClass(validProxyAttendanceSystem);
