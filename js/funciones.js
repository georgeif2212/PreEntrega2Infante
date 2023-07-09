// * Funciones
import { checkboxes, allProducts, ArrayCarrito } from "./sombreros.js";
import { sombreros } from "./database.js";

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

// Funciones del menu en consola
// export function menu() {
//   console.log("Hola");
//   do {
//     alert("Abre la consola");
//     alert(
//       "1. Ver sombreros:\n2. Ver servicios:\n3. Ver total de la cuenta:\n" +
//         "4. Reiniciar cuenta:\n5. Aplicar IVA a los precios:\n6. Ver todos los productos\n" +
//         "7. Filtrar productos por precio:\n8. Salir:"
//     );
//     opcion = parseInt(prompt("Ingresa un número"));
//     console.clear();
//     switch (opcion) {
//       case 1:
//         verSombreros();
//         break;
//       case 2:
//         verServicios();
//         break;
//       case 3:
//         alert("Tu cuenta es de: " + total);
//         break;
//       case 4:
//         alert("Tu cuenta se ha reiniciado");
//         total = 0;
//         break;
//       case 5:
//         aplicarIVA(sombreros);
//         aplicarIVA(servicios);
//         break;
//       case 6:
//         showProducts(productos);
//         break;
//       case 7:
//         filtrar();
//         break;
//       case 8:
//         alert("Regresa pronto");
//         break;
//       default:
//         alert("Te equivocaste, vuelve a intentar.");
//         break;
//     }
//   } while (opcion != opcionSalir);
// }

// export function verSombreros() {
//   for (const i of sombreros) {
//     i.describir();
//   }
//   let answer = parseInt(
//     prompt(
//       "Ingresa 1 si quieres comprar sombreros, si no, ingresa cualquier otro número"
//     )
//   );
//   if (answer == 1) {
//     comprarSombreros();
//   }
// }

// export function comprarSombreros() {
//   alert(
//     "Recuerda que todos los sombreros con precio mayor a 250 tienen descuento del 10%"
//   );
//   let precio;
//   let id = parseInt(prompt("Ingresa el id del sombrero que quieres"));
//   const sombrero = sombreros.find((el) => el.id === id);
//   if (sombrero === undefined) {
//     alert("El sombrero no existe");
//     precio = 0;
//   } else {
//     precio = descuento(sombrero.precio);
//   }
//   total = sumar(total, precio);
//   console.clear();
// }

// export function showProducts(array) {
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (Array.isArray(element)) {
//       for (let j = 0; j < element.length; j++) {
//         element[j].describir();
//       }
//     } else {
//       element.describir();
//     }
//   }
// }

// export function verServicios() {
//   for (const i of servicios) {
//     i.describir();
//   }
//   let answer = parseInt(
//     prompt(
//       "Ingresa 1 si quieres comprar algún servicio, si no, ingresa cualquier otro número"
//     )
//   );
//   if (answer == 1) {
//     comprarServicios();
//   }
// }

// export function comprarServicios() {
//   let id = parseInt(prompt("Ingresa el id del servicio que quieres"));
//   const servicio = servicios.find((el) => el.id === id);
//   if (servicio === undefined) {
//     alert("El sombrero no existe");
//     precio = 0;
//   } else {
//     precio = servicio.precio;
//   }
//   total = sumar(total, precio);
//   console.clear();
// }

// export function filtrar() {
//   let answer;
//   let precio;
//   answer = parseInt(
//     prompt("1: Filtrar elementos sombreros, 2: Filtrar elementos servicios")
//   );
//   if (answer == 1) {
//     showProducts(sombreros);
//     precio = parseInt(
//       prompt("¿Con que precio quieres filtrar a los sombreros")
//     );
//     filter(precio, sombreros);
//   } else {
//     showProducts(servicios);
//     precio = parseInt(
//       prompt("¿Con que precio quieres filtrar a los servicios")
//     );
//     filter(precio, servicios);
//   }
// }

// export function filter(precio, array) {
//   const filtrado = array.filter((el) => el.precio <= precio);
//   console.clear();
//   showProducts(filtrado);
// }

// export function aplicarIVA(arr) {
//   arr.forEach((el) => {
//     el.precio = el.precio + el.precio * 0.16;
//   });
// }
