// * Funciones
import { checkboxes, allProducts } from "./sombreros.js";
import { sombreros } from "./database.js";

export function updateCart() {
  const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoIndicador = document.querySelector("#carrito-indicador");
  // Obtén la cantidad de elementos en el carrito
  const cantidadCarrito = ArrayCarrito.length; // Suponiendo que tienes un array llamado ArrayCarrito con los elementos del carrito
  // Actualiza el indicador
  carritoIndicador.textContent = cantidadCarrito;
}

export function obtenerCategoriasSeleccionadas() {
  const categorias = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const categoria = checkbox.getAttribute("id").replace("check-", "");
      categorias.push(categoria);
    }
  });

  return categorias;
}

export function filtrarPorCategorias(categorias) {
  allProducts.innerHTML = "";

  sombreros.forEach((el) => {
    if (categorias.every((categoria) => el.categorias.includes(categoria))) {
      const article = document.createElement("article");
      article.classList.add("producto", "box-product");
      article.innerHTML = `
        <img class="producto-img mb-2" src="${el.url}" alt="" />
        <div class="producto-info">
          <h3 class="color-1 size-medium_s producto-info_title pb-1">${el.categorias[0]}</h3>
          <p class="color-2 size-small_l producto-info_category mb-0 pb-0">${el.categorias[1]}</p>
          <p class="color-3 size-small_l">${el.categorias[2]}</p>
          <div class="producto-info-button">
            <button type="button" class="button add-cart">
              <span class="button__text">Agregar</span>
              <span class="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg">
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
            <p class="producto-info-button_precio color-2">$ ${el.precio}</p>
          </div>
        </div>
      `;
      const addCartButtons = article.querySelectorAll(".add-cart");
      addCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
          ArrayCarrito.push(el);
          localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
        });
      });
      allProducts.appendChild(article);
    }
  });
}


// * Funciones flecha
export const sumar = (a, b) => a + b;
export const descuento = (precio) => {
  if (precio > 250) {
    precio = precio - precio * 0.1;
  }
  return precio;
};
