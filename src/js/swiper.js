import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit('.calendar__slider')
})

const swiperInit = (selector) => {
	const slider = document.querySelector('.calendar__slider')
	const next   = document.querySelector('.calendar__next')

	const swiper = new Swiper(selector, {
		modules: [Navigation, EffectFade],

		mousewheel: {
			invert: false,
		},

		navigation: {
			nextEl: '.calendar__next',
			prevEl: '.calendar__prev',
		},

		effect: "fade",
		speed: 1200
	})

	swiper.on('reachBeginning', () => {
		slider.classList.remove('additional-padding')
	});

	next.addEventListener('click', () => {
		slider.classList.add('additional-padding')
	})

	if (!swiper) return
}