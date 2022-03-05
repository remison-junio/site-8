const nav = document.querySelector('.nav')

const btnHamburger = document.querySelector('#btn-hamburger').addEventListener('click', ()=> {
	nav.classList.toggle('active');
})