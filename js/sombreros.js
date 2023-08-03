import { servicios } from "./database.js";
import {
  obtenerCategoriasSeleccionadas,
  filtrarPorCategorias,
  updateCart,
  notiToastify,
} from "./funciones.js";

const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
document.addEventListener("DOMContentLoaded", () => {
  updateCart(ArrayCarrito);
});

// ! Servicios
const idServicios = document.querySelector("#servicios");
document.addEventListener("DOMContentLoaded", () => {
  idServicios.innerHTML = "";
  servicios.forEach((el) => {
    const { url, nombre, descripcion, precio } = el;
    const article = document.createElement("article");
    article.classList.add("box-product");
    article.innerHTML = `
      <div class="grid-container-productos_producto">
        <img class="grid-container-productos_img" src="${url}" alt="" />
        <div>
          <h3 class="color-1 size-medium_s pt-2">${nombre}</h3>
          <p class="color-2 size-small_l mb-0 pb-0">${descripcion}</p>
          <p class="products_price color-2 size-small_l mb-1"><b>$ ${precio}</b></p>
          <p class="color-offer size-small_l px-2">Gratis en la compra de 1 sombrero</p>
        </div>
      </div>
      `;
    idServicios.appendChild(article);
  });
});

// ! Sombreros
const categoriasSombreros = [
  "Caballero",
  "Niño",
  "Dama",
  "Invierno",
  "Verano",
  "Bristol",
  "Bombín",
  "Turbante",
  "Chistera",
  "Floppy",
];
const datalist = document.getElementById("categorias-list");
const searchButton = document.querySelector("#searchButton");
const selectedCategory = document.querySelector("#selected-category");
const allProducts = document.querySelector("#all-products");

document.addEventListener("change", () => {
  searchButton.addEventListener("click", () => {
    console.log(selectedCategory.value);
    fetch("../data.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        allProducts.innerHTML = "";
        response.forEach((el) => {
          if (
            el.categorias.includes(selectedCategory.value) &&
            el.seccion == "All"
          ) {
            const { precio, url, categorias } = el;
            const article = document.createElement("article");
            article.classList.add("producto", "box-product");
            article.innerHTML = `
              <img class="producto-img mb-2" src="${url}" alt="" />
              <div class="producto-info">
                <h3 class="color-1 size-medium_s producto-info_title pb-1">${categorias[0]}</h3>
                <p class="color-2 size-small_l producto-info_category mb-0 pb-0">
                ${categorias[1]}
                </p>
                <p class="color-3 size-small_l mb-1 pb-0">${categorias[2]}</p>
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
                  <p class="producto-info-button_precio color-2"><b>$ ${precio}</b></B></p>
                </div>
              </div>
            `;
            const addCartButtons = article.querySelectorAll(".add-cart");
            addCartButtons.forEach((button) => {
              button.addEventListener("click", () => {
                ArrayCarrito.push(el);
                //localStorage.clear();
                localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
                notiToastify("./carrito.html");
                updateCart(ArrayCarrito);
              });
            });
            allProducts.appendChild(article);
          }
        });
      });
  });
});

categoriasSombreros.forEach((categoria) => {
  const option = document.createElement("option");
  option.value = categoria;
  datalist.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      allProducts.innerHTML = "";
      response.forEach((el) => {
        if (el.seccion == "All") {
          const { precio, url, categorias } = el;
          const article = document.createElement("article");
          article.classList.add("producto", "box-product");
          article.innerHTML = `
            <img class="producto-img mb-2" src="${url}" alt="" />
            <div class="producto-info">
              <h3 class="color-1 size-medium_s producto-info_title pb-1">${categorias[0]}</h3>
              <p class="color-2 size-small_l producto-info_category mb-0 pb-0">
              ${categorias[1]}
              </p>
              <p class="color-3 size-small_l mb-1 pb-0">${categorias[2]}</p>
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
                <p class="producto-info-button_precio color-2"><b>$ ${precio}</b></B></p>
              </div>
            </div>
          `;
          const addCartButtons = article.querySelectorAll(".add-cart");
          addCartButtons.forEach((button) => {
            button.addEventListener("click", () => {
              ArrayCarrito.push(el);
              //localStorage.clear();
              localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
              notiToastify("./carrito.html");
              updateCart(ArrayCarrito);
            });
          });
          allProducts.appendChild(article);
        }
      });
    })
    .catch((response) => console.log(response));
});

const checkboxes = document.querySelectorAll('[name="check-sombrero"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const categoriasSeleccionadas = obtenerCategoriasSeleccionadas();
    filtrarPorCategorias(categoriasSeleccionadas);
  });
});
