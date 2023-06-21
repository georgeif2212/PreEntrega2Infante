let opcion;
let total = 0;
const opcionSalir = 8;
class Sombrero {
  constructor(id, color, talla, tipo, precio) {
    this.id = id;
    this.color = color;
    this.talla = talla;
    this.tipo = tipo;
    this.precio = precio;
  }
  describir() {
    console.log(
      "Sombrero con id: " +
        this.id +
        " de color: " +
        this.color +
        " talla no. " +
        this.talla +
        " del tipo: " +
        this.tipo +
        " y cuesta: " +
        this.precio
    );
  }
}
class Servicio {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  describir() {
    console.log(
      "Servicio con id: " +
        this.id +
        " de: " +
        this.nombre +
        ", cuesta: " +
        this.precio
    );
  }
}

// * Funciones
function menu() {
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

function verSombreros() {
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

function comprarSombreros() {
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

function showProducts(array) {
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

function verServicios() {
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

function comprarServicios() {
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

function filtrar() {
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

function filter(precio, array) {
  const filtrado = array.filter((el) => el.precio <= precio);
  console.clear();
  showProducts(filtrado);
}

function aplicarIVA(arr) {
  arr.forEach((el) => {
    el.precio = el.precio + el.precio * 0.16;
  });
}

// * Funciones flecha
const sumar = (a, b) => a + b;
const descuento = (precio) => {
  if (precio > 250) {
    precio = precio - precio * 0.1;
  }
  return precio;
};

// * objetos, productos y arrays
const sombreros = [];
const servicios = [];
const productos = [];
const sombrero1 = new Sombrero(1, "Cafe", 50, "Bristol", 300);
const sombrero2 = new Sombrero(2, "Negro", 54, "Bombín", 229);
const sombrero3 = new Sombrero(3, "Azul", 48, "Fedora", 260);
const sombrero4 = new Sombrero(4, "Rojo", 46, "Porkpie", 200);
const sombrero5 = new Sombrero(5, "Cafe", 40, "Canotier Veneciano", 249);
sombreros.push(sombrero1, sombrero2, sombrero3, sombrero4, sombrero5);
const servicio1 = new Servicio(1, "Limpieza", 129);
const servicio2 = new Servicio(2, "Premium", 200);
const servicio3 = new Servicio(3, "Brillo", 130);
servicios.push(servicio1, servicio2, servicio3);
productos.push(sombreros, servicios);

// ! PROGRAMA
let name = prompt("Bienvenido, ingrese su nombre");
while (name === "") {
  name = prompt("Por favor, ingresa tu nombre");
}
alert("Bienvenido " + name);

menu();

