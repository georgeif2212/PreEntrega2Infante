// * objetos, productos y arrays
export const sombreros = [];
export const servicios = [];
export const productos = [];
import { Sombrero,Servicio } from "./classes.js";
const sombrero1 = new Sombrero(
  1,
  "Cafe",
  50,
  "Bristol",
  250,
  "../img/producto1.jpg"
);
const sombrero2 = new Sombrero(
  2,
  "Negro",
  54,
  "Bombín",
  229,
  "../img/producto2.jpg"
);
const sombrero3 = new Sombrero(
  3,
  "Azul",
  48,
  "Fedora",
  249,
  "../img/producto3.jpg"
);
const sombrero4 = new Sombrero(
  4,
  "Rojo",
  46,
  "Porkpie",
  200,
  "../img/producto4.jpg"
);
const sombrero5 = new Sombrero(
  5,
  "Cafe",
  40,
  "Canotier Veneciano",
  249,
  "../img/producto5.jpg"
);
const sombrero6 = new Sombrero(
  5,
  "Cafe",
  40,
  "Canotier",
  221,
  "../img/producto5.jpg"
);
sombreros.push(
  sombrero1,
  sombrero2,
  sombrero3,
  sombrero4,
  sombrero5,
  sombrero6
);
const servicio1 = new Servicio(1, "Limpieza", 129);
const servicio2 = new Servicio(2, "Premium", 200);
const servicio3 = new Servicio(3, "Brillo", 130);
servicios.push(servicio1, servicio2, servicio3);
productos.push(sombreros, servicios);