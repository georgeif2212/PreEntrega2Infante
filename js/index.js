// ! Carrusel html
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "slide", // Cambiar el tipo de carrusel a 'slide'
    //perPage: 3, // Mostrar solo 1 slide a la vez
    drag: true, // Habilitar arrastrar
    dragFree: true, // Habilitar arrastrado libre
    flickMaxPages: 1, // Arrastrar solo 1 página a la vez
    easing: "cubic-bezier(.42,0,.58,1)", // Efecto de deslizamiento personalizado
    perPage: 3, // Mostrar solo 1 elemento
    perMove: 1, // Mover 1 elemento a la vez
    breakpoints: {
      576: {
        perPage: 1, // Mostrar solo 1 elemento en celular
      },
      1023: {
        perPage: 2, // Mostrar 2 elementos en tablet
      },
    },
  }).mount();
});