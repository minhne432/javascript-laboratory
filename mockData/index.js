const typeOF = require("../tools/typeOF");
const url = "https://fakestoreapi.com/products/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    typeOF(data);
  });
