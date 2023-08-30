//https://kea-alt-del.dk/t7/api/products/1525

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-info h3").textContent = product.productdisplayname;
  document.querySelector(".product-info .brand").textContent = product.brandname;
  document.querySelector(".product-info .articletype").textContent = product.articletype;
  document.querySelector(".product-info .price").textContent = product.price;
  document.querySelector(".product-image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".info-list .info-description").textContent = product.productdisplayname;
  document.querySelector(".info-list .info_id").textContent = product.id;
}
