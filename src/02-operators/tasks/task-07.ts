/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */


// const pricePerNight : number = 650000
// const nightStayed : number = 4
// const serviceCharge : number = 120000
// const tax : number = 0.11
// const isVIP : boolean = true

// const vipDiscount = isVIP ? pricePerNight * 0.12 : 0
// const freeBrunch = isVIP || nightStayed >= 3 
// const subtotal : number = pricePerNight * nightStayed
// const afterDiscount : number = subtotal - (subtotal * vipDiscount)
// const afterTax : number = afterDiscount + (afterDiscount * tax)
// const finalTotal : number = afterTax + serviceCharge

// console.log(`Final price after tax and discount: ${finalTotal}`)
// console.log(`Service Charge: ${serviceCharge}`)
// console.log(`Eligible for free breakfast: ${freeBrunch}`)


/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const pricePer: number = 650000;
const nightsStay: number = 4;
const serviceCharge: number = 120000;
const tax: number = 0.11;
const Vip: boolean = true;

const isDiscount = Vip ? 0.12 : 1
const isfreeBreakfast = nightsStay >= 3 || Vip == true ? true : false

const Discount: number = ((pricePer * nightsStay) * isDiscount)
const priceAFTRdic: number = (pricePer * nightsStay) - Discount + serviceCharge
const taxFIx: number = ((pricePer * nightsStay) - Discount + serviceCharge) * tax
const finalPaymnet: number = priceAFTRdic + taxFIx

console.log(`Room subtotal: ${pricePer * nightsStay}`)
console.log(`Discount: ${Discount}`)
console.log(`Tax: ${taxFIx}`)
console.log(`Final payment: ${finalPaymnet}`)
console.log(`Eligible for free breakfast: ${isfreeBreakfast}`)