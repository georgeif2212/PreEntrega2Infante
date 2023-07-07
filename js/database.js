// * objetos, productos y arrays
export const sombreros = [];
export const servicios = [];
export const productos = [];
import { Sombrero, Servicio } from "./classes.js";
const sombrero1 = new Sombrero(1, "Cafe", 50, 250, "../img/producto1.jpg", [
  "Bristol",
  "Niño",
  "Invierno",
  "Formal",
]);
const sombrero2 = new Sombrero(2, "Negro", 54, 229, "../img/producto2.jpg", [
  "Bombín",
  "Caballero",
  "Verano",
  "Casual",
]);
const sombrero3 = new Sombrero(3, "Azul", 48, 249, "../img/producto3.jpg", [
  "Fedora",
  "Dama",
  "Verano",
  "Clásico",
]);
const sombrero4 = new Sombrero(4, "Verde", 46, 200, "../img/producto4.jpg", [
  "Porkpie",
  "Niño",
  "Verano",
  "Clásico",
]);
const sombrero5 = new Sombrero(5, "Beige", 40, 300, "../img/producto5.jpg", [
  "Canotier",
  "Caballero",
  "Invierno",
  "Casual",
]);
const sombrero6 = new Sombrero(6, "Blanco", 40, 324, "../img/producto6.jpg", [
  "Gorra",
  "Dama",
  "Invierno",
  "Formal",
]);
const sombrero7 = new Sombrero(7, "Gris", 42, 360, "../img/producto7.jpg", [
  "Floppy",
  "Niño",
  "Invierno,",
  "Formal",
]);
const sombrero8 = new Sombrero(8, "Negro", 54, 452, "../img/producto8.jpg", [
  "Panamá",
  "Caballero",
  "Verano",
  "Casual",
]);
const sombrero9 = new Sombrero(9, "Amarillo", 48, 400, "../img/producto9.jpg", [
  "Trillby",
  "Dama",
  "Verano",
  "Clásico",
]);
const sombrero10 = new Sombrero(10, "Rojo", 46, 420, "../img/producto10.jpg", [
  "Chistera",
  "Niño",
  "Verano",
  "Clásico",
]);
const sombrero11 = new Sombrero(11, "Cafe", 40, 369, "../img/producto11.png", [
  "Turbante",
  "Caballero",
  "Invierno",
  "Casual",
]);
const sombrero12 = new Sombrero(12, "Cafe", 40, 400, "../img/producto12.jpg", [
  "Cloche",
  "Dama",
  "Invierno",
  "Formal",
]);
const sombrero13 = new Sombrero(12, "Cafe", 40, 221, "../img/producto12.jpg", [
  "Pamela",
  "Dama",
  "Invierno",
  "Formal",
]);
sombreros.push(
  sombrero1,
  sombrero2,
  sombrero3,
  sombrero4,
  sombrero5,
  sombrero6,
  sombrero7,
  sombrero8,
  sombrero9,
  sombrero10,
  sombrero11,
  sombrero12,
  // sombrero13,
);
const servicio1 = new Servicio(1, "Limpieza", 129);
const servicio2 = new Servicio(2, "Premium", 200);
const servicio3 = new Servicio(3, "Brillo", 130);
servicios.push(servicio1, servicio2, servicio3);
productos.push(sombreros, servicios);
