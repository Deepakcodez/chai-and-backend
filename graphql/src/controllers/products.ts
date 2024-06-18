import Product from "../model/product.model.js";

export const allProducts =  async()=>{
    const products = await Product.find()
    console.log('>>>>>>>>>>>', products);
    return products;
}


export const getProductById =  async(parent:any , arg : { id : string})=>{
    const product = await Product.findById(arg.id)
    console.log('>>>>>>>>>>>', product);
    return product;
}