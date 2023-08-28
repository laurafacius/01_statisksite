//https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-info h3").textContent = product.productdisplayname;
  document.querySelector(".product-info .brand").textContent = product.brandname;
  document.querySelector(".product-info .articletype").textContent = product.articletype;
  document.querySelector(".product-info .price").textContent = product.price;
}
