// * Funciones
let opcion;
let total = 0;
const opcionSalir = 8;
export function menu() {
  console.log("Hola");
  do {
    alert("Abre la consola");
    alert(
      "1. Ver sombreros:\n2. Ver servicios:\n3. Ver total de la cuenta:\n" +
        "4. Reiniciar cuenta:\n5. Aplicar IVA a los precios:\n6. Ver todos los productos\n" +
        "7. Filtrar productos por precio:\n8. Salir:"
    );
    opcion = parseInt(prompt("Ingresa un número"));
    console.clear();
    switch (opcion) {
      case 1:
        verSombreros();
        break;
      case 2:
        verServicios();
        break;
      case 3:
        alert("Tu cuenta es de: " + total);
        break;
      case 4:
        alert("Tu cuenta se ha reiniciado");
        total = 0;
        break;
      case 5:
        aplicarIVA(sombreros);
        aplicarIVA(servicios);
        break;
      case 6:
        showProducts(productos);
        break;
      case 7:
        filtrar();
        break;
      case 8:
        alert("Regresa pronto");
        break;
      default:
        alert("Te equivocaste, vuelve a intentar.");
        break;
    }
  } while (opcion != opcionSalir);
}

export function verSombreros() {
  for (const i of sombreros) {
    i.describir();
  }
  let answer = parseInt(
    prompt(
      "Ingresa 1 si quieres comprar sombreros, si no, ingresa cualquier otro número"
    )
  );
  if (answer == 1) {
    comprarSombreros();
  }
}

export function comprarSombreros() {
  alert(
    "Recuerda que todos los sombreros con precio mayor a 250 tienen descuento del 10%"
  );
  let precio;
  let id = parseInt(prompt("Ingresa el id del sombrero que quieres"));
  const sombrero = sombreros.find((el) => el.id === id);
  if (sombrero === undefined) {
    alert("El sombrero no existe");
    precio = 0;
  } else {
    precio = descuento(sombrero.precio);
  }
  total = sumar(total, precio);
  console.clear();
}

export function showProducts(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        element[j].describir();
      }
    } else {
      element.describir();
    }
  }
}

export function verServicios() {
  for (const i of servicios) {
    i.describir();
  }
  let answer = parseInt(
    prompt(
      "Ingresa 1 si quieres comprar algún servicio, si no, ingresa cualquier otro número"
    )
  );
  if (answer == 1) {
    comprarServicios();
  }
}

export function comprarServicios() {
  let id = parseInt(prompt("Ingresa el id del servicio que quieres"));
  const servicio = servicios.find((el) => el.id === id);
  if (servicio === undefined) {
    alert("El sombrero no existe");
    precio = 0;
  } else {
    precio = servicio.precio;
  }
  total = sumar(total, precio);
  console.clear();
}

export function filtrar() {
  let answer;
  let precio;
  answer = parseInt(
    prompt("1: Filtrar elementos sombreros, 2: Filtrar elementos servicios")
  );
  if (answer == 1) {
    showProducts(sombreros);
    precio = parseInt(
      prompt("¿Con que precio quieres filtrar a los sombreros")
    );
    filter(precio, sombreros);
  } else {
    showProducts(servicios);
    precio = parseInt(
      prompt("¿Con que precio quieres filtrar a los servicios")
    );
    filter(precio, servicios);
  }
}

export function filter(precio, array) {
  const filtrado = array.filter((el) => el.precio <= precio);
  console.clear();
  showProducts(filtrado);
}

export function aplicarIVA(arr) {
  arr.forEach((el) => {
    el.precio = el.precio + el.precio * 0.16;
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