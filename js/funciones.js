const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
// * Funciones
export function updateCart(ArrayCarrito) {
  const carritoIndicador = document.querySelector("#carrito-indicador");
  // Obtén la cantidad de elementos en el carrito
  const cantidadCarrito = ArrayCarrito.length; // Suponiendo que tienes un array llamado ArrayCarrito con los elementos del carrito
  // Actualiza el indicador
  carritoIndicador.textContent = cantidadCarrito;
}

const checkboxes = document.querySelectorAll('[name="check-sombrero"]');
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

// ! Sombreros
const allProducts = document.querySelector("#all-products");
export function filtrarPorCategorias(categorias) {
  const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      allProducts.innerHTML = "";
      response.forEach((el) => {
        if (el.seccion == "All") {
          if (
            categorias.every((categoria) => el.categorias.includes(categoria))
          ) {
            const { precio, url, categorias } = el;
            const article = document.createElement("article");
            article.classList.add("producto", "box-product");
            article.innerHTML = `
              <img class="producto-img mb-2" src="${url}" alt="" />
              <div class="producto-info">
                <h3 class="color-1 size-medium_s producto-info_title pb-1">${categorias[0]}</h3>
                <p class="color-2 size-small_l producto-info_category mb-0 pb-0">${categorias[1]}</p>
                <p class="color-3 size-small_l mb-1 pb-0">${categorias[2]}</p>
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
                  <p class="producto-info-button_precio color-2"><b>$ ${precio}</b> </p>
                </div>
              </div>
            `;
            const addCartButtons = article.querySelectorAll(".add-cart");
            addCartButtons.forEach((button) => {
              button.addEventListener("click", () => {
                ArrayCarrito.push(el);
                localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
                notiToastify("./carrito.html");
                updateCart(ArrayCarrito);
              });
            });
            allProducts.appendChild(article);
          }
        }
      });
    });
}

export function notiToastify(destino) {
  Toastify({
    text: "Agregado al carrito de compras",
    duration: 3000,
    destination: destino,
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
}

export function updateSummary(
  suma,
  subtotalElemento,
  descuentoTotal,
  totalElemento,
  costoEnvio
) {
  subtotalElemento.textContent = suma;
  let descuento = suma * 0.1;
  descuentoTotal.textContent = descuento.toFixed(2);

  let envio = suma > 500 ? "Gratis" : suma * 0.4;
  envio = envio == "Gratis" ? "Gratis" : envio.toFixed(2);

  let total =
    envio == "Gratis" ? suma - descuento : suma + parseInt(envio) - descuento;

  totalElemento.textContent = total.toFixed(2);
  costoEnvio.textContent = envio;
}

export function emptySummary(containerSummary) {
  containerSummary.innerHTML = `
            <h3 class="color-2 size-medium_m pb-3">Resumen</h3>
            <div class="carrito-resumen-calculo">
              <p class="color-2 size-medium_s mb-2">Subtotal</p>
              <p class="color-1 size-medium_s mb-2">
                $ <span id="subtotal">0</span>
              </p>
            </div>
            <div class="carrito-resumen-calculo">
              <p class="color-2 size-medium_s mb-2">
                Gastos de envío estimados
              </p>
              <p class="color-1 size-medium_s mb-2">
                <span id="envio"></span>
              </p>
            </div>
            <div class="carrito-resumen-calculo">
              <p class="color-2 size-medium_s mb-2">Descuento total</p>
              <p class="color-1 size-medium_s mb-4">
                -$ <span id="descuento">0</span>
              </p>
            </div>
            <div class="carrito-resumen-calculo-total">
              <p class="color-2 size-medium_s mb-0">Total</p>
              <p class="color-1 size-medium_s mb-0">
                $ <span id="total">0</span>
              </p>
            </div>
          `;
}

export function emptyCart(containerCarrito) {
  containerCarrito.innerHTML = `
    <div class="d-flex align-items-center justify-content-center pt-5">
      <h4 class="color-3 size-medium_l text-center align-self-center pt-5">
        No tienes productos en el carrito, ve a comprar
      </h4>
    </div>
  `;
}

// Función para actualizar el precio y subtotal
export const actualizarPrecio = (
  cantidadElemento,
  precioElemento,
  subtotalElemento,
  descuentoTotal,
  totalElemento,
  costoEnvio
) => {
  const cantidadSeleccionada = parseInt(cantidadElemento.value);
  const precioOriginal = parseInt(precioElemento.dataset.precioOriginal);
  const nuevoPrecio = precioOriginal * cantidadSeleccionada;
  precioElemento.textContent = nuevoPrecio;

  // Actualizar subtotal
  let subtotal = 0;
  const preciosElementos = document.querySelectorAll("#precio");
  preciosElementos.forEach((elemento) => {
    subtotal += parseInt(elemento.textContent);
  });

  updateSummary(
    subtotal,
    subtotalElemento,
    descuentoTotal,
    totalElemento,
    costoEnvio
  );
};

// Función para eliminar un artículo del carrito
export const eliminarArticulo = (index) => {
  ArrayCarrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
  location.reload();
};

// * Funciones flecha
export const sumar = (a, b) => a + b;
export const descuento = (precio) => {
  if (precio > 250) {
    precio = precio - precio * 0.1;
  }
  return precio;
};
