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

let parrafo = document.getElementById('texto-largo');
let parrafo1 = document.getElementById('texto-largo1')

navToggle.addEventListener('click', function() {
  parrafo.classList.toggle('mostrar');
});

navToggle.addEventListener('click', function() {
  parrafo1.classList.toggle('mostrar');
});
navToggle.addEventListener("click", () => {
  menu_nav.classList.toggle("hidden")
});



const $sectionPin = document.querySelector('#sectionPin');
const $pinWrapSticky = document.querySelector('.pin-wrap-sticky');
const $pinWrap = document.querySelector('.pin-wrap');

/* Stretch it out, so that we create room for the horizontal scroll animation */
$sectionPin.style.height = '500vh';
$sectionPin.style.overflow = 'visible'; // To make position sticky work …

/* Stick to Top */
$pinWrapSticky.style.height = '100vh';
$pinWrapSticky.style.width = '100vw';
$pinWrapSticky.style.position = 'sticky';
$pinWrapSticky.style.top = '0';
$pinWrapSticky.style.overflowX = 'hidden';

/* Stretch out pinwrap */
$pinWrap.style.height = '100vh';
$pinWrap.style.width = '250vmax';

// Scroll-Linked Animation
$pinWrap.animate(
	{
		transform: [ ``, `translateX(calc(-100% + 100vw))`],
		left: '0px',
	},
	{
		timeline: new ViewTimeline({
			subject: $sectionPin,
			axis: 'block',
		}),
		fill: 'forwards',
		rangeStart: `contain 0%`,
		rangeEnd: `contain 100%`,
	}
);

// navToggle.addEventListener("click", function() {
//     if (menu_nav.classList.contains("hidden")) {
//       menu_nav.classList.remove("hidden"); // Mostrar el menú
//     } else {
//       menu_nav.classList.add("hidden"); // Ocultar el menú
//     }
//   });