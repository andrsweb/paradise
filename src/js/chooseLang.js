document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	chooseActiveLang()
})

const chooseActiveLang = () => {
	const langButtons = document.querySelectorAll('.lang')

	if(!langButtons.length) return

	langButtons.forEach(button => {
		button.addEventListener('click', () => {
			const old = document.querySelector('.lang.active')
			
			old.classList.remove('active')
			button.classList.add('active')
		})
	})
}