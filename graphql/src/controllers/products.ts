import Product from "../model/product.model.js";

export const allProducts =  async()=>{
    const products = await Product.find()
    console.log('>>>>>>>>>>>', products);
    return products;
}