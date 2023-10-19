// const header = document.getElementById('m-header');

// window.addEventListener('scroll', () => {
//     // Obtén la posición de desplazamiento vertical
//     const scrollY = window.scrollY;

//     // Define la altura a la que quieres que cambie el fondo (por ejemplo, 100 píxeles)
//     const scrollThreshold = 50;

//     if (scrollY > scrollThreshold) {
//         // Cambia el fondo cuando se hace suficiente scroll
//         header.style.backgroundColor = "#000"; // Nuevo color de fondo
//     } else {
//         // Vuelve al fondo original si se desplaza hacia arriba
//         header.style.backgroundColor = 'rgba(0, 0, 0, .5) '; // Color de fondo original
//     }
// });



const navToggle = document.getElementById("navToggle")
const menu_nav = document.getElementById("menu_nav")


navToggle.addEventListener("click", () => {
  menu_nav.classList.toggle("hidden")
});


// navToggle.addEventListener("click", function() {
//     if (menu_nav.classList.contains("hidden")) {
//       menu_nav.classList.remove("hidden"); // Mostrar el menú
//     } else {
//       menu_nav.classList.add("hidden"); // Ocultar el menú
//     }
//   });