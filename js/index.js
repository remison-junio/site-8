const nav = document.querySelector('.nav');

const btnHamburger = document.querySelector('#btn-hamburger');

btnHamburger.addEventListener('click', ()=> {
	nav.classList.toggle('active');
})

btnHamburger.addEventListener('blur', ()=> {
	nav.classList.remove('active');
})

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

$(document).ready(function(){

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
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

	$('.btn-right').click(function() {
	    owl.trigger('next.owl.carousel');
	})

	$('.btn-left').click(function() {
	    owl.trigger('prev.owl.carousel');
	})

})

