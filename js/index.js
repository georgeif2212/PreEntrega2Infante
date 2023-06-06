let opcion;
let total = 0;
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

function menu() {
  do {
    alert("Abre la consola");
    console.log("1. Ver sombreros:");
    console.log("2. Comprar servicio:");
    console.log("3. Ver total de la cuenta:");
    console.log("4. Reiniciar cuenta:");
    console.log("5. Salir:");
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
        alert("Regresa pronto.");
        break;
      default:
        alert("Te equivocaste, vuelve a intentar.");
        break;
    }
  } while (opcion != 5);
}

const sumar = (a, b) => a + b;
const descuento =(precio)=> {
  if(precio>250){
    precio =precio-precio*0.10;
  }
  return precio
}
// * objetos, producto y array
const sombreros =[];
const servicios =[];
const sombrero1 = new Sombrero(1, "Cafe", 50, "Bristol", 300);
const sombrero2 = new Sombrero(2, "Negro", 54, "Bombín", 229);
const sombrero3 = new Sombrero(3, "Azul", 48, "Fedora", 260);
sombreros.push(sombrero1,sombrero2,sombrero3);
const servicio1 = new Servicio(1, "Limpieza", 129);
const servicio2 = new Servicio(2, "Premium", 200);
servicios.push(servicio1,servicio2);


function verSombreros() {
  for(const i of sombreros){
    i.describir();
  }  
  alert("Recuerda que todos los sombreros con precio mayor a 250 tienen descuento del 10%");
  let precio;
  let id = parseInt(prompt("Ingresa el id del sombrero que quieres"));
  const pos = sombreros.map(e => e.id).indexOf(id);
  if(pos==-1){
    alert("El sombrero no existe");
    precio=0;
  }else{
    precio = descuento(sombreros[pos].precio);
  }
  
  total = sumar(total, precio);
  console.clear();
}

function verServicios() {
  servicio1.describir();
  servicio2.describir();
  let precio = parseInt(prompt("Ingresa el precio del servicio que quieres"));
  total = sumar(total, precio);
  console.clear();
}

//        PROGRAMA
let name = prompt("Bienvenido, ingrese su nombre");
while (name === "") {
    name = prompt("Por favor, ingresa tu nombre");
}
alert("Bienvenido " + name);

menu();
