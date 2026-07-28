/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeeID: String
    employeeName: String
    date: String
    checkInTime: String
    checkOutTime: String
    totalHours: number
}

const Okkadelard : Attendance = {
    employeeID: `5400248`,
    employeeName: `Okka Adelard Syahbarr`,
    date: `15-8-2025`,
    checkInTime: `05.10 WIB`,
    checkOutTime: `19.10 WIB`,
    totalHours: 36
}

const Prabuwangi : Attendance = {
    employeeID: `1240484`,
    employeeName: `Prabu Panedya Firdaus Putra Aglar`,
    date: `24-10-2026`,
    checkInTime: `20.00 WIB`,
    checkOutTime: `19.00 WIB`,
    totalHours: 550
}

const Tetraezar : Attendance = {
    employeeID: `2848502`,
    employeeName: `Tetra Ezar Putrantoro`,
    date: `10-8-2021`,
    checkInTime: `07.00 WIB`,
    checkOutTime: `17.00 WIB`,
    totalHours: 15000
}

console.log(`Employee Of The Week`)
console.log(`Employee ID: ${Okkadelard.employeeID}`)
console.log(`Employee Name: ${Okkadelard.employeeName}`)
console.log(`Date Of Employment: ${Okkadelard.date}`)
console.log(`Last Check-In: ${Okkadelard.checkInTime}`)
console.log(`Last Check-Out: ${Okkadelard.checkOutTime}`)
console.log(`Total Hours Of Work: ${Okkadelard.totalHours}`)
console.log()
console.log(`Employee Of The Month`)
console.log(`Employee ID: ${Prabuwangi.employeeID}`)
console.log(`Employee Name: ${Prabuwangi.employeeName}`)
console.log(`Date Of Employment: ${Prabuwangi.date}`)
console.log(`Last Check-In: ${Prabuwangi.checkInTime}`)
console.log(`Last Check-Out: ${Prabuwangi.checkOutTime}`)
console.log(`Total Hours Of Work: ${Prabuwangi.totalHours}`)
console.log()
console.log(`Employee Of The Year`)
console.log(`Employee ID: ${Tetraezar.employeeID}`)
console.log(`Employee Name: ${Tetraezar.employeeName}`)
console.log(`Date Of Employment: ${Tetraezar.date}`)
console.log(`Last Check-In: ${Tetraezar.checkInTime}`)
console.log(`Last Check-Out: ${Tetraezar.checkOutTime}`)
console.log(`Total Hours Of Work: ${Tetraezar.totalHours}`)