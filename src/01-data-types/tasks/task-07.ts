/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
    studentID: String
    fullName: String
    grade: String
}
type Course = {
    courseID: String
    courseTitle: String
    instructor: String
    learningHours: number
}
type Registration = {
    customer: Student
    course: Course
    date: String
    isPaid: boolean
}

const raja:Student = {
    studentID: `235769`,
    fullName: `Razan Wira Aryanta`,
    grade: `XI-INTL`
}

const tazkia:Student= {
    studentID: `287494`,
    fullName: `Tazkia Adila Affandie`,
    grade: `XI-INTL`
}

const bintang:Student={
    studentID: `859242`,
    fullName: `Bintang Ardhita Gandhy`,
    grade: `XI RPL-8`
}

const rpl:Course={
    courseID: `1`,
    courseTitle: `Rekayasa Perangkat Lunak`,
    instructor: `Mr. Zakaria`,
    learningHours: 8
}

const tkj:Course={
    courseID: `2`,
    courseTitle: `Teknologi Komputer Jaringan`,
    instructor: `Mr. Joni`,
    learningHours: 9
}

const pg:Course={
    courseID: `3`,
    courseTitle: `Pengembangan Gim`,
    instructor: `Mr. Chandra`,
    learningHours: 9
}

const day1:Registration={
    customer:bintang,
    course: rpl,
    date: `08-29-2026`,
    isPaid: true
}

const day2:Registration={
    customer:raja,
    course:tkj,
    date: `08-30-2026`,
    isPaid: false
}

const day3:Registration={
    customer:tazkia,
    course:rpl,
    date: `08-31-2026`,
    isPaid: true
}

console.log(day1)
console.log
console.log(day2)
console.log
console.log(day3)