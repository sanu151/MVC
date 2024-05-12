const express = require("express");
const {
  getUser,
  getHome,
  getError,
  saveUser,
} = require("../controller/control");
const { saveProduct, getProducts } = require("../controller/product.control");
const router = express.Router();

router.get("/", getHome);

router.get("/user", getUser);

router.post("/user", saveUser);

router.get("/product", getProducts);

router.post("/product", saveProduct);

router.use(getError);

module.exports = router;
