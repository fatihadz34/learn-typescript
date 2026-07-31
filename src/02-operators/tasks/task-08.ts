/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const prevMeter : number = 25640
const currentMeter : number = 25892
const pricePerkWh : number = 1650
const isPanelHere : boolean = true
const isEnergySaving : boolean = false

const electUsage: number = currentMeter - prevMeter
const discountPanel : number = isPanelHere ? electUsage * 0.2 : 0
const savingDiscount : number = isEnergySaving ? electUsage * 0.05 : 0
const totalDiscount : number = discountPanel + savingDiscount
const finalBill : number = (electUsage - totalDiscount) * pricePerkWh
const isGreenEnergy : boolean = isPanelHere && electUsage < 300 && isEnergySaving

console.log(`Total energy consumption: ${electUsage} kWh`)
console.log(`Electricity bill: Rp${electUsage * pricePerkWh}`)
console.log(`Final bill after discounts: Rp${finalBill}`)
console.log(`Eligible for Green Energy Program: ${isGreenEnergy}`)