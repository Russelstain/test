let menu = document.querySelector(".list");
let burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
	menu.classList.toggle("open")
});



window.addEventListener('click', event => {
	const target = event.target;
	if (!target.closest('.burger') && !target.closest('.list')) {
		menu.classList.remove('open');
	}
});

var swiper = new Swiper('.header-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	class Accordion {
		constructor(options = {}) {
			const {
				accordionEl = '.accordion-item__trigger',
					closeOthers = true,
			} = options;
			this.accordionEl = accordionEl;
			this.closeOthers = closeOthers;
			this.init();
		}
		init() {
			const accordionBtn = document.querySelectorAll(this.accordionEl);
			accordionBtn.forEach((element, index, arr) => {
				element.addEventListener('click', () => {
					if (this.closeOthers) {
						for (let items of arr) {
							if (!element.classList.contains('open')) {
								items.classList.remove('open');
							}
						}
					}
					element.classList.toggle('open');
				});
			});
		}
	}
	new Accordion();
});

var swiper = new Swiper('.why-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	  },
});


let string = "эЙ КАК ДЕЛА";
let answer = string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(answer);


var age = 11;
var accompanied = 12;
if (age < accompanied) {
	console.log("нет проходу")
} else {
	console.log("проходи")
}