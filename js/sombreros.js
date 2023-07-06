import { sombreros } from "./database.js";
const idProductos = document.querySelector("#productos");
document.addEventListener("DOMContentLoaded", () => {
  // Tu código aquí
  idProductos.innerHTML = "";
  sombreros.forEach((el) => {
    if (el.precio <= 250) {
      const article = document.createElement("article");
      article.classList.add("box-shadow");
      article.innerHTML = `
      <a href="">
        <div class="grid-container-productos_producto">
          <img class="grid-container-productos_img" src="${el.url}" alt="" />
          <div>
            <p class="color-1 size-medium_m pt-2">${el.tipo}</p>
            <p class="pt-1 color-2 size-medium_s">${el.color}</p>
            <p class="products_price color-1 size-small_l"><b>$ ${el.precio}</b></p>
            <p class="color-offer size-medium_s">Envío gratis</p>
          </div>
        </div>
      </a>`;
      idProductos.appendChild(article);
    }
  });
});
