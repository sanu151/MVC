const path = require("path");

const products = require("../model/product");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const product = {
    name,
    price,
  };
  products.push(product);
  // console.log(users);
  res.status(201).json({
    success: true,
    products,
  });
};
