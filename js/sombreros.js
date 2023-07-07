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
    const article = document.createElement("article");
    article.classList.add("producto", "box-product");
    article.innerHTML = `
      <img class="producto-img mb-2" src="${el.url}" alt="" />
      <div class="producto-info">
        <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
        <p class="color-1 size-medium_s producto-info_category">
        ${el.categorias[1]}
        </p>
        <p class="color-2 size-small_l">${el.categorias[2]}</p>
        <div class="producto-info-button">
          <button type="button" class="button">
            <span class="button__text">Add Item</span>
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
          <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
        </div>
      </div>
    `;
    allProducts.appendChild(article);
  });
});

// const checkCaballero = document.querySelector("#check-Caballero");
// const checkNiño = document.querySelector("#check-Niño");
// const checkDama = document.querySelector("#check-Dama");
// const checkInvierno = document.querySelector("#check-Invierno");
// const checkVerano = document.querySelector("#check-Verano");

// checkCaballero.addEventListener("click", () => {
//   allProducts.innerHTML = "";
//   sombreros.forEach((el) => {
//     if (el.categorias[1] == "Caballero") {
//       const article = document.createElement("article");
//       article.classList.add("producto", "box-product");
//       article.innerHTML = `
//       <img class="producto-img mb-2" src="${el.url}" alt="" />
//       <div class="producto-info">
//         <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
//         <p class="color-1 size-medium_s producto-info_category">
//         ${el.categorias[1]}
//         </p>
//         <div class="producto-info-button">
//           <button type="button" class="button">
//             <span class="button__text">Add Item</span>
//             <span class="button__icon"
//               ><svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 height="24"
//                 fill="none"
//                 class="svg"
//               >
//                 <line y2="19" y1="5" x2="12" x1="12"></line>
//                 <line y2="12" y1="12" x2="19" x1="5"></line></svg
//             ></span>
//           </button>
//           <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
//         </div>
//       </div>
//     `;
//       allProducts.appendChild(article);
//     }
//   });
// });

// checkNiño.addEventListener("click", () => {
//   allProducts.innerHTML = "";
//   sombreros.forEach((el) => {
//     if (el.categorias[1] == "Niño") {
//       const article = document.createElement("article");
//       article.classList.add("producto", "box-product");
//       article.innerHTML = `
//       <img class="producto-img mb-2" src="${el.url}" alt="" />
//       <div class="producto-info">
//         <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
//         <p class="color-1 size-medium_s producto-info_category">
//         ${el.categorias[1]}
//         </p>
//         <div class="producto-info-button">
//           <button type="button" class="button">
//             <span class="button__text">Add Item</span>
//             <span class="button__icon"
//               ><svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 height="24"
//                 fill="none"
//                 class="svg"
//               >
//                 <line y2="19" y1="5" x2="12" x1="12"></line>
//                 <line y2="12" y1="12" x2="19" x1="5"></line></svg
//             ></span>
//           </button>
//           <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
//         </div>
//       </div>
//     `;
//       allProducts.appendChild(article);
//     }
//   });
// });

// checkDama.addEventListener("click", () => {
//   allProducts.innerHTML = "";
//   sombreros.forEach((el) => {
//     if (el.categorias[1] == "Dama") {
//       const article = document.createElement("article");
//       article.classList.add("producto", "box-product");
//       article.innerHTML = `
//       <img class="producto-img mb-2" src="${el.url}" alt="" />
//       <div class="producto-info">
//         <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
//         <p class="color-1 size-medium_s producto-info_category">
//         ${el.categorias[1]}
//         </p>
//         <div class="producto-info-button">
//           <button type="button" class="button">
//             <span class="button__text">Add Item</span>
//             <span class="button__icon"
//               ><svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 height="24"
//                 fill="none"
//                 class="svg"
//               >
//                 <line y2="19" y1="5" x2="12" x1="12"></line>
//                 <line y2="12" y1="12" x2="19" x1="5"></line></svg
//             ></span>
//           </button>
//           <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
//         </div>
//       </div>
//     `;
//       allProducts.appendChild(article);
//     }
//   });
// });

// checkInvierno.addEventListener("click", () => {
//   allProducts.innerHTML = "";
//   sombreros.forEach((el) => {
//     if (el.categorias[2] == "Invierno") {
//       const article = document.createElement("article");
//       article.classList.add("producto", "box-product");
//       article.innerHTML = `
//       <img class="producto-img mb-2" src="${el.url}" alt="" />
//       <div class="producto-info">
//         <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
//         <p class="color-1 size-medium_s producto-info_category">
//         ${el.categorias[1]}
//         </p>
//         <div class="producto-info-button">
//           <button type="button" class="button">
//             <span class="button__text">Add Item</span>
//             <span class="button__icon"
//               ><svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 height="24"
//                 fill="none"
//                 class="svg"
//               >
//                 <line y2="19" y1="5" x2="12" x1="12"></line>
//                 <line y2="12" y1="12" x2="19" x1="5"></line></svg
//             ></span>
//           </button>
//           <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
//         </div>
//       </div>
//     `;
//       allProducts.appendChild(article);
//     }
//   });
// });

// checkVerano.addEventListener("click", () => {
//   allProducts.innerHTML = "";
//   sombreros.forEach((el) => {
//     if (el.categorias[2] == "Verano") {
//       const article = document.createElement("article");
//       article.classList.add("producto", "box-product");
//       article.innerHTML = `
//       <img class="producto-img mb-2" src="${el.url}" alt="" />
//       <div class="producto-info">
//         <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
//         <p class="color-1 size-medium_s producto-info_category">
//         ${el.categorias[1]}
//         </p>
//         <div class="producto-info-button">
//           <button type="button" class="button">
//             <span class="button__text">Add Item</span>
//             <span class="button__icon"
//               ><svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke="currentColor"
//                 height="24"
//                 fill="none"
//                 class="svg"
//               >
//                 <line y2="19" y1="5" x2="12" x1="12"></line>
//                 <line y2="12" y1="12" x2="19" x1="5"></line></svg
//             ></span>
//           </button>
//           <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
//         </div>
//       </div>
//     `;
//       allProducts.appendChild(article);
//     }
//   });
// });
const checkboxes = document.querySelectorAll('[name="check-sombrero"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const categoriasSeleccionadas = obtenerCategoriasSeleccionadas();
    filtrarPorCategorias(categoriasSeleccionadas);
  });
});

function obtenerCategoriasSeleccionadas() {
  const categorias = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const categoria = checkbox.getAttribute("id").replace("check-", "");
      categorias.push(categoria);
    }
  });

  return categorias;
}

function filtrarPorCategorias(categorias) {
  allProducts.innerHTML = "";

  sombreros.forEach((el) => {
    if (categorias.every((categoria) => el.categorias.includes(categoria))) {
      const article = document.createElement("article");
      article.classList.add("producto", "box-product");
      article.innerHTML = `
        <img class="producto-img mb-2" src="${el.url}" alt="" />
        <div class="producto-info">
          <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
          <p class="color-1 size-medium_s producto-info_category">${el.categorias[1]}</p>
          <p class="color-2 size-small_l">${el.categorias[2]}</p>
          <div class="producto-info-button">
            <button type="button" class="button">
              <span class="button__text">Add Item</span>
              <span class="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg">
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
            <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
          </div>
        </div>
      `;
      allProducts.appendChild(article);
    }
  });
}
