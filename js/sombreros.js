import { sombreros } from "./database.js";
import {
  obtenerCategoriasSeleccionadas,
  filtrarPorCategorias,
  updateCart,
} from "./funciones.js";

const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});

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
            <p class="color-1 size-medium_m pt-2">${el.categorias[0]}</p>
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

const allProducts = document.querySelector("#all-products");
document.addEventListener("DOMContentLoaded", () => {
  // Tu código aquí
  allProducts.innerHTML = "";
  sombreros.forEach((el) => {
    const {precio, url, categorias} = el;
    const article = document.createElement("article");
    article.classList.add("producto", "box-product");
    article.innerHTML = `
      <img class="producto-img mb-2" src="${url}" alt="" />
      <div class="producto-info">
        <h3 class="color-1 size-medium_s producto-info_title pb-1">${categorias[0]}</h3>
        <p class="color-2 size-small_l producto-info_category mb-0 pb-0">
        ${categorias[1]}
        </p>
        <p class="color-3 size-small_l">${categorias[2]}</p>
        <div class="producto-info-button">
          <button type="button" class="button add-cart">
            <span class="button__text">Agregar</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line></svg
            ></span>
          </button>
          <p class="producto-info-button_precio color-2">$ ${precio}</p>
        </div>
      </div>
    `;
    const addCartButtons = article.querySelectorAll(".add-cart");
    addCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        ArrayCarrito.push(el);
        //localStorage.clear();
        localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
        Toastify({
          text: "Agregado al carrito de compras",
          duration: 3000,
          destination: "./carrito.html",
          newWindow: false,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "rgb(168,232,144)",
            background: "linear-gradient(90deg, rgba(168,232,144,1) 22%, rgba(84,180,53,1) 80%)",
            color: "white",
          },
          offset: {
            y: 45,
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        updateCart();
      });
    });
    allProducts.appendChild(article);
  });
});

const checkboxes = document.querySelectorAll('[name="check-sombrero"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const categoriasSeleccionadas = obtenerCategoriasSeleccionadas();
    filtrarPorCategorias(categoriasSeleccionadas);
  });
});
