const nav = document.querySelector('.nav');

const btnHamburger = document.querySelector('#btn-hamburger');

const main = document.querySelector('main')
const footer = document.querySelector('footer')

btnHamburger.addEventListener('click', abrirFecharMenu)

function abrirFecharMenu() {
	if(nav.classList.contains('active')) {
		nav.classList.remove('active')
		removeEventoClick(main, footer)
	} else {
		nav.classList.add('active')
		addEventoClick(main, footer)
	}
}

function addEventoClick(...itens) {
	itens.forEach(item => item.addEventListener('click', abrirFecharMenu))
}

function removeEventoClick(...itens) {
	itens.forEach(item => item.removeEventListener('click', abrirFecharMenu))
}

const menuIdioma = document.querySelector('.menu-idioma');
const btnIdioma = document.querySelector('.btn-idioma');

btnIdioma.addEventListener('click', () => {
	menuIdioma.classList.toggle('active');
})

btnIdioma.addEventListener('blur', () => {
	menuIdioma.classList.remove('active');
})

//hover das redes sociais

const btnRedes = document.querySelectorAll('.btn-redes')
const redesOcutas = document.querySelectorAll('.redes-sociais .ocuto')

btnRedes.forEach((item, indice) => {
	item.addEventListener('mouseenter', ()=> {
		redesOcutas[indice].classList.add('active')
	})
})

btnRedes.forEach((item, indice) => {
	item.addEventListener('mouseleave', ()=> {
		redesOcutas[indice].classList.remove('active')
	})
})

//Carousel

$(document).ready(()=> {

	const owl = $('.owl-carousel');

	owl.owlCarousel({
	    loop:true,
	    margin:10,
	    dots:false,
	    autoplay:true,
	    autoplayTimeout:7000,
	    transition: 'linear',
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

	$('.btn-right').click(() => {
	    owl.trigger('next.owl.carousel');
	})

	$('.btn-left').click(() => {
	    owl.trigger('prev.owl.carousel');
	})
})

//Topo

$(window).scroll(()=> {
	let distancia = $('.secao-1').offset().top - $(window).scrollTop();

	if(distancia <= 0) $('footer .ao-topo').addClass('active')
	else $('footer .ao-topo').removeClass('active')
})

$('.ao-topo').click(()=> $('html, body').animate({scrollTop:0}, 'slow'));
