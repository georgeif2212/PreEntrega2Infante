import { updateCart } from "./funciones.js";
import { sombreros } from "./database.js";

// ! Carrito en el header
const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
updateCart(ArrayCarrito);

// ! Carrusel html
const featuredProdcuts = document.querySelector("#featured-products");
document.addEventListener("DOMContentLoaded", () => {
  featuredProdcuts.innerHTML = "";
  sombreros.forEach((el) => {
    if (el.seccion === "Featured") {
      const { precio, url, categorias } = el;
      const li = document.createElement("li");
      li.classList.add("splide__slide");
      li.innerHTML = `
        <article class="box-shadow featured-products-product">
          <img class="pb-1" src="${url}" alt="" />
          <p class="products_name color-1 size-medium_s">${categorias[0]}</p>
          <p class="products_description color-2 size-small_l text-center">
            Sombrero para ${categorias[1]} en temporada <br>de ${categorias[2]}
          </p>
          <div class="featured-products-product__buy">
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
            <p class="producto-info-button_precio color-2"><b>$ ${precio}</b></p>
        </div>
      </article>
      `;
      const addCartButtons = li.querySelectorAll(".add-cart");
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
              background:
                "linear-gradient(90deg, rgba(168,232,144,1) 22%, rgba(84,180,53,1) 80%)",
              color: "white",
            },
            offset: {
              y: 45,
            },
            onClick: function () {}, // Callback after click
          }).showToast();
          updateCart(ArrayCarrito);
        });
      });
      featuredProdcuts.appendChild(li);
    }
  });
  new Splide(".splide", {
    type: "slide", // Cambiar el tipo de carrusel a 'slide'
    drag: true, // Habilitar arrastrar
    dragFree: true, // Habilitar arrastrado libre
    flickMaxPages: 1, // Arrastrar solo 1 página a la vez
    easing: "cubic-bezier(.42,0,.58,1)", // Efecto de deslizamiento personalizado
    perPage: 3, // Mostrar solo 1 elemento
    perMove: 1, // Mover 1 elemento a la vez
    breakpoints: {
      576: {
        perPage: 1, // Mostrar solo 1 elemento en celular
      },
      1023: {
        perPage: 2, // Mostrar 2 elementos en tablet
      },
    },
  }).mount();
});

// ! Rated products
let articleCounter = 1;
const column1 = document.getElementById('secondary-column-1');
const column2 = document.getElementById('secondary-column-2');
console.log(column1);
console.log(column2);

document.addEventListener("DOMContentLoaded",()=>{
  column1.innerHTML="";
  column2.innerHTML="";
  sombreros.forEach((el)=>{
    if (el.seccion === "Rated") {
      const { precio, url,categorias} = el;
      const article = document.createElement("article");
      article.classList.add("rated-products-product", "box-shadow","mb-4");
      article.innerHTML=`
        <img
        src="${url}"
        class="rated-products-product_img"
        alt=""
        />
        <div class="rated-products-product-info">
          <div>
            <p class="products_name pt-2 color-2 size-medium_s">
              ${categorias[0]}
            </p>
            <p class="products_price color-2 size-small_l">
              <b>$ ${precio}</b>
            </p>
          </div>
          <div class="rated-products-product-info__buy">
            <div class="rate">
              <input type="radio" id="star5_${articleCounter}" name="rate_${articleCounter}" value="5" />
              <label for="star5_${articleCounter}" title="text">5 stars</label>
              <input type="radio" id="star4_${articleCounter}" name="rate_${articleCounter}" value="4" />
              <label for="star4_${articleCounter}" title="text">4 stars</label>
              <input type="radio" id="star3_${articleCounter}" name="rate_${articleCounter}" value="3" />
              <label for="star3_${articleCounter}" title="text">3 stars</label>
              <input type="radio" id="star2_${articleCounter}" name="rate_${articleCounter}" value="2" />
              <label for="star2_${articleCounter}" title="text">2 stars</label>
              <input type="radio" id="star1_${articleCounter}" name="rate_${articleCounter}" value="1" />
              <label for="star1_${articleCounter}" title="text">1 star</label>
            </div>
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
          </div>
        </div>
      `;
      const addCartButtons = article.querySelectorAll(".add-cart");
      addCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
          ArrayCarrito.push(el);
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
              background:
                "linear-gradient(90deg, rgba(168,232,144,1) 22%, rgba(84,180,53,1) 80%)",
              color: "white",
            },
            offset: {
              y: 45,
            },
            onClick: function () {}, // Callback after click
          }).showToast();
          updateCart(ArrayCarrito);
        });
      });
      if (articleCounter % 2 === 0) {
        column2.appendChild(article);
      } else {
        column1.appendChild(article);
      }
      articleCounter++;
    }
  });
});