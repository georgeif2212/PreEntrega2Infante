const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
const containerCarrito = document.querySelector("#carrito-productos");
document.addEventListener("DOMContentLoaded", () => {
  containerCarrito.innerHTML = "";
  ArrayCarrito.forEach((el) => {
    const article = document.createElement("article");
    article.classList.add("producto-carrito");
    article.innerHTML = `
      <img
      class="producto-carrito__img"
      src="${el.url}"
      alt=""
      />
      <div class="producto-carrito-info">
        <div>
          <h4 class="color-1 size-medium_s mb-2">${el.categorias[0]}</h4>
          <p class="color-2 size-small_l mb-1">Sombrero para ${el.categorias[1]}</p>
          <p class="color-2 size-small_l mb-1">Color: ${el.color}</p>
          <div class="producto-carrito-info-selects">
            <div>
              <label class="color-2 size-small_l" for="talla"
              >Talla:</label
              >
              <select id="talla" name="talla" class="my-select">
                <option value="1">41</option>
                <option value="2">42</option>
                <option value="3">43</option>
                <option value="4">44</option>
                <option value="5">45</option>
              </select>
            </div>
          <div>
            <label class="color-2 size-small_l" for="cantidad"
              >Cantidad:</label
            >
            <select id="cantidad" name="cantidad" class="my-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <div class="producto-carrito-info-extra">
        <p class="color-2 size-medium_s mb-1">
          <b>$ <span id="precio">${el.precio}</span></b>
        </p>
        <button>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>`;
    containerCarrito.appendChild(article);
  });
});

const selectCantidad = document.querySelector("#cantidad");
const precioElemento = document.querySelector("#precio");
const subtotal = document.querySelector("#subtotal");
// Obtener el precio inicial
console.log(precioElemento);

// // Función para actualizar el precio según la cantidad seleccionada
// const actualizarPrecio = () => {
//   const cantidadSeleccionada = selectCantidad.value;
//   const nuevoPrecio = precio * cantidadSeleccionada;
//   precioElemento.textContent = nuevoPrecio;
// };
// const actualizarSubtotal = () => {
//   const preciosElementos = document.querySelectorAll("#precio");
//   console.log(preciosElementos);
// };

// // Agregar el event listener al cambio de selección
// selectCantidad.addEventListener("change", actualizarPrecio);

// subtotal.addEventListener("change", actualizarSubtotal);
