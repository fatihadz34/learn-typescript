/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    studentId: String
    fullName: String
    age: number
    isActive: boolean
}

const students: Student[] = [
    {
        studentId: "542251182",
        fullName: "Fatih Lintang",
        age: 16,
        isActive: true
    },

    {
        studentId: "542251392",
        fullName: "Okka Adelard",
        age: 15,
        isActive: false
    },

    {
        studentId: "542251396",
        fullName: "Prabu Panedya",
        age: 14,
        isActive: false
    },

    {
        studentId: "542251468",
        fullName: "Tetra Ezar",
        age: 13,
        isActive: true
    }
]

console.log(students[0])