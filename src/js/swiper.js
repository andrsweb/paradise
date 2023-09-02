import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit('.calendar__slider')
})

const swiperInit = (selector) => {
	const slider = document.querySelector('.calendar__slider')
	const next   = document.querySelector('.calendar__next')

	if(!slider && !next) return

	const swiper = new Swiper(selector, {
		modules: [Navigation, EffectFade],
		slidesPerView: 1,

		navigation: {
			nextEl: '.calendar__next',
			prevEl: '.calendar__prev',
		},

		effect: "fade",
		speed: 600
	})

	swiper.on('reachBeginning', () => {
		slider.classList.remove('additional-padding')
	});

	next.addEventListener('click', () => {
		slider.classList.add('additional-padding')
	})

	if (!swiper) return
}