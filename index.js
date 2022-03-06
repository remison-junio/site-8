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