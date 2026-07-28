/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: String 
    productName: String
    productPrice: number
    stock: number
    productWeight: number
    avgRating: number
    isDiscounted: boolean
}

const indomie : Product = {
    productCode: `89686010947`,
    productName: `Indomie Goreng`,
    productPrice: 3500,
    stock: 150,
    productWeight: 84,
    avgRating: 4.5,
    isDiscounted: false
}

const boncabe : Product = {
    productCode: `8995899250112`,
    productName: `Boncabe Lvl 10`,
    productPrice: 13000,
    stock: 100,
    productWeight: 35,
    avgRating: 4.4,
    isDiscounted: true
}

const masakoayam:Product = {
    productCode: `8347298735702`,
    productName: `Masako Ayam`,
    productPrice: 6000,
    stock: 125,
    productWeight: 12,
    avgRating: 4.7,
    isDiscounted: false
}

console.log(`Produk Pertama`)
console.log(`Nama Produk: ${indomie.productName}`)
console.log(`Kode Produksi: ${indomie.productCode}`)
console.log(`Harga Produk: Rp. ${indomie.productPrice}`)
console.log(`Berat Bersih: ${indomie.productWeight} Gram`)
console.log(`Stok Produk: ${indomie.stock}`)
console.log(`Rating Produk: ${indomie.avgRating}`)
console.log(`Apakah ada diskon di produk ini? : ${indomie.isDiscounted}`)
console.log()
console.log(`Produk Kedua`)
console.log(`Nama Produk: ${boncabe.productName}`)
console.log(`Kode Produksi: ${boncabe.productCode}`)
console.log(`Harga Produk: Rp. ${boncabe.productPrice}`)
console.log(`Berat Bersih: ${boncabe.productWeight} Gram`)
console.log(`Stok Produk: ${boncabe.stock}`)
console.log(`Rating Produk: ${boncabe.avgRating}`)
console.log(`Apakah ada diskon di produk ini? : ${boncabe.isDiscounted}`)
console.log()
console.log(`Produk Ketiga`)
console.log(`Nama Produk: ${masakoayam.productName}`)
console.log(`Kode Produksi: ${masakoayam.productCode}`)
console.log(`Harga Produk: Rp. ${masakoayam.productPrice}`)
console.log(`Berat Bersih: ${masakoayam.productWeight} Gram`)
console.log(`Stok Produk: ${masakoayam.stock}`)
console.log(`Rating Produk: ${masakoayam.avgRating}`)
console.log(`Apakah ada diskon di produk ini? : ${masakoayam.isDiscounted}`)