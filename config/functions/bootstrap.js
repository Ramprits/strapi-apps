"use strict";
const products = require("../../product.json");

module.exports = async () => {
  if (productData.length < 0) {
    products.forEach((product) => {
      strapi.services.product.create({
        name: product.name,
        description: product.description,
        price: product.price,
        sale_price: product.sale_price,
        user: 1,
      });
    });
  }
};
