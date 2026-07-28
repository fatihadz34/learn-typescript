/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type Product = {
    name: String
    code: String
    price: number
    stock: number
}

const buyQuantity: number = 2
const discount: number = 25/100
const isPremium: boolean = true

const RGBKeyboard: Product = {
    name: `Mechanical RGB Keyboard`,
    code: `KBR-001`,
    price: 850000,
    stock: 18
}

console.log(`Is the customer Premium? ${isPremium}`)
console.log(`Name: ${RGBKeyboard.name}`)
console.log(`Product Code: ${RGBKeyboard.code}`)
console.log(`Product Price: ${RGBKeyboard.price}`)
console.log(`Product Stock: ${RGBKeyboard.stock}`)
console.log(`Discount: ${discount}`)
console.log(`Items Bought: ${buyQuantity}`)
