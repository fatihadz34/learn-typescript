/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour : number = 8000
const totalPlayingMinutes : number = (7 * 60) + 35
const remainingMinutes : number = totalPlayingMinutes % 60

const totalBilledHours : number = totalPlayingMinutes / 60
const paymentBfrDisc : number = totalBilledHours * ratePerHour
const discount : number = totalBilledHours > 5 ? paymentBfrDisc * 0.15 : 0
const finalPayment : number = paymentBfrDisc - discount
const discountApplied : boolean = discount > 0

console.log(`Total Playing Time: ${totalPlayingMinutes} minutes`)
console.log(`Remaining Minutes: ${remainingMinutes} minutes`)
console.log(`Total Billed Hours: ${totalBilledHours} hours`)
console.log(`Total Payment Before Discount: Rp${paymentBfrDisc}`)
console.log(`Discount Amount: Rp${discount}`)
console.log(`Final Payment: Rp${finalPayment}`)
console.log(`Is Discount Applied: ${discountApplied}`)