export class Sombrero {
  constructor(id, color, talla, tipo, precio, url, categoria) {
    this.id = id;
    this.color = color;
    this.talla = talla;
    this.tipo = tipo;
    this.precio = precio;
    this.url = url;
    this.categoria = categoria;
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
export class Servicio {
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