"use strict"
const iconMenu = document.querySelector('.menu__icon');
console.log(iconMenu)
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	// const logoBurger = document.querySelector('.header__logo');
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		// logoBurger.classList.toggle('_active');
	}
	)
}


