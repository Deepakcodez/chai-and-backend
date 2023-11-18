const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;


exports.veiwProdById = (req, res) => {
  const id = req.params.id;
  console.log(">>>>>>>>>>>", id);
  const product = products.find((product) => product.id == id);
  console.log(">>>>>>>>>>>", product);
  res.json(product);
};

exports.createPost = (req, res) => {
  console.log(">>>>>>>>>>>", req.body);
  products.push(req.body);
  res.json(req.body);
};

exports.veiwAll = (req, res) => {
  res.json(products);
};

exports.putUpdate = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id == id);
  console.log(">>>>>>>>>>>", productIndex);
  const updateprod = products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).send("success in updating");
};

exports.patchUpdate = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id == id);
  console.log(">>>>>>>>>>>", productIndex);
  const prod = products[productIndex];
  const updateprod = products.splice(productIndex, 1, { ...prod, ...req.body });
  res.status(201).send("success in updating");
};

exports.deleteProd = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id == id);
  console.log(">>>>>>>>>>>", productIndex);
  const deletedProd = products.splice(productIndex, 1);
  res.send("success in deleting");
};
