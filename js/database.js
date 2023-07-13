// * objetos, productos y arrays
export const sombreros = [];
export const servicios = [];
export const productos = [];
import { Sombrero, Servicio } from "./classes.js";
const sombrerosData = [
  {
    color: "Cafe",
    talla: 50,
    precio: 250,
    imagen: "../img/producto1.jpg",
    categorias: ["Bristol", "Niño", "Invierno", "Formal"],
    section: "All"
  },
  {
    color: "Negro",
    talla: 54,
    precio: 229,
    imagen: "../img/producto2.jpg",
    categorias: ["Bombín", "Caballero", "Verano", "Casual"],
    section: "All"
  },
  {
    color: "Azul",
    talla: 48,
    precio: 249,
    imagen: "../img/producto3.jpg",
    categorias: ["Fedora", "Dama", "Verano", "Clásico"],
    section: "All"
  },
  {
    color: "Verde",
    talla: 46,
    precio: 200,
    imagen: "../img/producto4.jpg",
    categorias: ["Porkpie", "Niño", "Verano", "Clásico"],
    section: "All"
  },
  {
    color: "Beige",
    talla: 40,
    precio: 300,
    imagen: "../img/producto5.jpg",
    categorias: ["Canotier", "Caballero", "Invierno", "Casual"],
    section: "All"
  },
  {
    color: "Blanco",
    talla: 40,
    precio: 324,
    imagen: "../img/producto6.jpg",
    categorias: ["Gorra", "Dama", "Invierno", "Formal"],
    section: "All"
  },
  {
    color: "Gris",
    talla: 42,
    precio: 360,
    imagen: "../img/producto7.jpg",
    categorias: ["Floppy", "Niño", "Invierno", "Formal"],
    section: "All"
  },
  {
    color: "Negro",
    talla: 54,
    precio: 452,
    imagen: "../img/producto8.jpg",
    categorias: ["Panamá", "Caballero", "Verano", "Casual"],
    section: "All"
  },
  {
    color: "Amarillo",
    talla: 48,
    precio: 400,
    imagen: "../img/producto9.jpg",
    categorias: ["Trillby", "Dama", "Verano", "Clásico"],
    section: "All"
  },
  {
    color: "Rojo",
    talla: 46,
    precio: 420,
    imagen: "../img/producto10.jpg",
    categorias: ["Chistera", "Niño", "Verano", "Clásico"],
    section: "All"
  },
  {
    color: "Cafe",
    talla: 40,
    precio: 369,
    imagen: "../img/producto11.png",
    categorias: ["Turbante", "Caballero", "Invierno", "Casual"],
    section: "All"
  },
  {
    color: "Cafe",
    talla: 40,
    precio: 400,
    imagen: "../img/producto12.jpg",
    categorias: ["Cloche", "Dama", "Invierno", "Formal"],
    section: "All"
  },
  {
    color: "Cafe",
    talla: 50,
    precio: 250,
    imagen: "../img/featured1.jpg",
    categorias: ["Bristol", "Niño", "Invierno", "Formal"],
    section: "Featured"
  },
  {
    color: "Negro",
    talla: 54,
    precio: 229,
    imagen: "../img/featured2.jpg",
    categorias: ["Bombín", "Caballero", "Verano", "Casual"],
    section: "Featured"
  },
  {
    color: "Azul",
    talla: 48,
    precio: 249,
    imagen: "../img/featured3.jpg",
    categorias: ["Fedora", "Dama", "Verano", "Clásico"],
    section: "Featured"
  },
  {
    color: "Verde",
    talla: 46,
    precio: 200,
    imagen: "../img/featured4.jpg",
    categorias: ["Porkpie", "Niño", "Verano", "Clásico"],
    section: "Featured"
  },
  {
    color: "Beige",
    talla: 40,
    precio: 300,
    imagen: "../img/featured5.jpg",
    categorias: ["Canotier", "Caballero", "Invierno", "Casual"],
    section: "Featured"
  },
  {
    color: "Blanco",
    talla: 40,
    precio: 324,
    imagen: "../img/featured6.jpg",
    categorias: ["Gorra", "Dama", "Invierno", "Formal"],
    section: "Featured"
  },
  {
    color: "Gris",
    talla: 42,
    precio: 360,
    imagen: "../img/featured7.jpg",
    categorias: ["Floppy", "Niño", "Invierno", "Formal"],
    section: "Featured"
  },
  {
    color: "Negro",
    talla: 54,
    precio: 452,
    imagen: "../img/featured8.jpg",
    categorias: ["Panamá", "Caballero", "Verano", "Casual"],
    section: "Featured"
  },
  {
    color: "Amarillo",
    talla: 48,
    precio: 400,
    imagen: "../img/rated-2.jpg",
    categorias: ["Trillby", "Dama", "Verano", "Clásico"],
    section: "Rated"
  },
  {
    color: "Rojo",
    talla: 46,
    precio: 420,
    imagen: "../img/rated-3.jpg",
    categorias: ["Chistera", "Niño", "Verano", "Clásico"],
    section: "Rated"
  },
  {
    color: "Cafe",
    talla: 40,
    precio: 369,
    imagen: "../img/rated-4.jpg",
    categorias: ["Turbante", "Caballero", "Invierno", "Casual"],
    section: "Rated"
  },
  {
    color: "Cafe",
    talla: 40,
    precio: 400,
    imagen: "../img/rated-5.jpg",
    categorias: ["Cloche", "Dama", "Invierno", "Formal"],
    section: "Rated"
  },
];


for (let i = 0; i < sombrerosData.length; i++) {
  const data = sombrerosData[i];
  const sombrero = new Sombrero(
    i + 1,
    data.color,
    data.talla,
    data.precio,
    data.imagen,
    data.categorias,
    data.section
  );
  sombreros.push(sombrero);
}

const servicio1 = new Servicio(
  1,
  "Limpieza",
  100,
  "../img/servicio1.jpg",
  "Limpieza general"
);
const servicio2 = new Servicio(
  2,
  "Premium",
  200,
  "../img/servicio2.jpg",
  "Servicio completo"
);
const servicio3 = new Servicio(
  3,
  "Brillo",
  130,
  "../img/servicio3.jpg",
  "Brillo a tu sombrero"
);
const servicio4 = new Servicio(
  4,
  "Especial",
  150,
  "../img/servicio4.jpg",
  "Limpieza y brillo"
);
servicios.push(servicio1, servicio2, servicio3, servicio4);
productos.push(sombreros, servicios);
