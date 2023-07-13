import { updateCart } from "./funciones.js";
const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const containerCarrito = document.querySelector("#carrito-productos");

document.addEventListener("DOMContentLoaded", () => {
  containerCarrito.innerHTML = "";
  ArrayCarrito.forEach((el) => {
    const {color,precio, url, categorias} = el;
    const article = document.createElement("article");
    article.classList.add("producto-carrito");
    article.innerHTML = `
      <img class="producto-carrito__img" src="${url}" alt=""/>
      <div class="producto-carrito-info">
        <div>
          <h4 class="color-1 size-medium_s mb-2">${categorias[0]}</h4>
          <p class="color-2 size-small_l mb-1">Sombrero para ${categorias[1]}</p>
          <p class="color-2 size-small_l mb-1">Color: ${color}</p>
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
          <b>$ <span id="precio" data-precio-original="${precio}">${precio}</span></b>
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
    </div>
    `;
    containerCarrito.appendChild(article);
  });

  // Obtener los elementos de cantidad, precio y subtotal
  const selectCantidad = document.querySelectorAll("#cantidad");
  const preciosElementos = document.querySelectorAll("#precio");
  const subtotalElemento = document.querySelector("#subtotal");
  const totalElemento = document.querySelector("#total");
  const descuentoTotal = document.querySelector("#descuento");
  const costoEnvio = document.querySelector("#envio");
  let descuento;

  // Agregar el event listener a todos los elementos de cantidad
  selectCantidad.forEach((cantidadElemento, index) => {
    const precioElemento = preciosElementos[index];
    cantidadElemento.addEventListener("change", () => {
      actualizarPrecio(cantidadElemento, precioElemento, subtotalElemento);
    });
  });

  // Función para actualizar el precio y subtotal
  const actualizarPrecio = (
    cantidadElemento,
    precioElemento,
    subtotalElemento
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

    subtotalElemento.textContent = subtotal;
    descuento = subtotal * 0.1;
    descuentoTotal.textContent = descuento.toFixed(2);

    let envio = subtotal > 500 ? "Gratis" : subtotal * 0.4;
    envio = envio=="Gratis" ? "Gratis" : envio.toFixed(2);
    
    let total = envio == "Gratis" ? subtotal - descuento : subtotal + parseInt(envio) - descuento;

    totalElemento.textContent = total.toFixed(2);
    
    costoEnvio.textContent = envio;
  };

  // Obtener los elementos de los botones de eliminar
  const botonesEliminar = document.querySelectorAll(
    ".producto-carrito-info-extra button"
  );

  botonesEliminar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      eliminarArticulo(index);
      updateCart(ArrayCarrito);
    });
  });

  // Función para eliminar un artículo del carrito
  const eliminarArticulo = (index) => {
    ArrayCarrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
    location.reload();
  };

  const buttonPagar = document.querySelector("#pagar");
  buttonPagar.addEventListener("click", () => {
    Swal.fire({
      title: "¿Quieres confirmar la compra?",
      text: "Puedes hacer cambios cuando tú quieras",
      showCancelButton: true,
      confirmButtonColor: "#00a650",
      cancelButtonColor: "#B7B7B7",
      confirmButtonText: "Aceptar compra",
      backdrop: `
        rgba(192, 148, 81, 0.1)
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "¡Compra exitosa!",
          text: "Tu compra se ha registrado",
          confirmButtonColor: "#00a650",
          confirmButtonText: "OK",
          backdrop: `
            rgba(192, 148, 81, 0.1)
          `,
        });
        ArrayCarrito.splice(0, ArrayCarrito.length);
        localStorage.clear();
        containerCarrito.innerHTML = `
          <div class="d-flex align-items-center justify-content-center pt-5">
            <h4 class="color-3 size-medium_l text-center align-self-center pt-5">
              No tienes productos en el carrito, ve a comprar
            </h4>
          </div>
          `;
        const ArrayCarrito2 = ArrayCarrito;
        const carritoIndicador = document.querySelector("#carrito-indicador");
        const cantidadCarrito = ArrayCarrito2.length;

        carritoIndicador.textContent = cantidadCarrito;
      }
    });
  });
  updateCart(ArrayCarrito);
});
