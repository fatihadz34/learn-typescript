/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

type Employee = {
  name: string;
  basicSalary: number;
  overtimeHours: number;
  overtimeRate: number;
};

const siDimas: Employee = {
  name: "Dimas",
  basicSalary: 5000000,
  overtimeHours: 12,
  overtimeRate: 50000
};

const ovtPay : number = siDimas.overtimeHours * siDimas.overtimeRate
const bonus : number = siDimas.overtimeHours > 10 ? ovtPay + 300000 : 0
const finalsalary : number = bonus + siDimas.basicSalary

console.log(`Overtime Pay: Rp${ovtPay}`)
console.log(`Bonus: Rp${bonus}`)
console.log(`Final Salary: Rp${finalsalary}`)