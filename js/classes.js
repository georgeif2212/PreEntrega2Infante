export class Sombrero {
  constructor(id, color, talla, precio, url, categorias) {
    this.id = id;
    this.color = color;
    this.talla = talla;
    this.precio = precio;
    this.url = url;
    this.categorias = categorias;
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
  constructor(id, nombre, precio,url,descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.url = url;
    this.descripcion = descripcion;
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