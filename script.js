const navToggle = document.getElementById("navToggle");
const menu_nav = document.getElementById("menu_nav");

const parrafo = document.getElementById('texto-largo');
const parrafo1 = document.getElementById('texto-largo1');
const infoLlamada = document.getElementById('infoLlamada');
const infoCorreo = document.getElementById('infoCorreo');
const close = document.getElementById("close")


document.addEventListener("DOMContentLoaded", function() {
    mostrarPopup(); 
});

function mostrarPopup() {
    const popup = document.getElementById("miPopup");
	

    popup.style.display = "block";
	

    document.addEventListener("click", function(event) {
        const esPopup = popup.contains(event.target);
        if (!esPopup && popup.style.display !== "none") {
            cerrarPopup();
        }
    });
}

close.addEventListener('click', cerrarPopup)
function cerrarPopup() {
    const popup = document.getElementById("miPopup");
    popup.style.display = "none";
}


navToggle.addEventListener('click', function() {
  parrafo.classList.toggle('mostrar');
  parrafo1.classList.toggle('mostrar');
  menu_nav.classList.toggle("hidden");
  infoLlamada.classList.toggle('mostrar');
  infoCorreo.classList.toggle('mostrar');
});


// CARRUSEL

document.addEventListener("DOMContentLoaded", function () {
const slider = document.querySelector('.grande')
const items = document.querySelectorAll('.carrousel_img')

let currentIndex = 0;
let touchStartX = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < items.length - 1) {
	currentIndex++;
  } else {
	
	currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
	currentIndex--;
  } else {
	
	currentIndex = items.length - 1;
  }
  updateSlider();
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (touchStartX - event.touches[0].clientX > 50) {
	nextSlide();
  } else if (event.touches[0].clientX - touchStartX > 50) {
	prevSlide();
  }
}

slider.addEventListener("touchstart", handleTouchStart, { passive: true });
slider.addEventListener("touchmove", handleTouchMove, { passive: true });

setInterval(nextSlide, 4000); 
});




const $sectionPin = document.querySelector('#sectionPin');
const $pinWrapSticky = document.querySelector('.pin-wrap-sticky');
const $pinWrap = document.querySelector('.pin-wrap');

/* Stretch it out, so that we create room for the horizontal scroll animation */
$sectionPin.style.height = '500vh';
$sectionPin.style.overflow = 'visible'; 

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

