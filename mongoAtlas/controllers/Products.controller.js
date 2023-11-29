const model = require("../model/products.model");
const products = model.product;







// create 
const addProduct = async (req, resp) => {
  const product = new products(req.body)

  try {
    const savedProduct = await product.save();
    console.log("Product added successfully:", savedProduct);
    resp.status(200).json({ message: "Product added successfully",savedProduct });
  } catch (err) {
    console.error("Error saving product:", err);
    resp.status(404).json({ message: "Failure",err });
  }

};


// read 
const getAllProduct = async (req, resp) => {

    // const allProducts = await  products.find({price:{$gt:500}})
    const allProducts = await  products.find()
    resp.status(200).json({ 
        message: "get all products successfully",
        data : allProducts
 })};


 // read one
const getProduct = async (req, resp) => {
  let id = req.params.id
  console.log('>>>>>>>>>>>', {id})
  // http://localhost:8000/api/v1/products/singleProd/6565ffe0b4c2dd5367d6411b
  const Product = await  products.findOne({_id:id})
  resp.status(200).json({ 
      message: "get product successfully",
      data : Product
})};




  



module.exports = { getAllProduct, addProduct ,getProduct};
