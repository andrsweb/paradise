document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMoreCards( '.show__more', '.event:not(.visible)' )
	showMoreCards( '.show__more', '.coming__event:not(.visible)' )
} )

const showMoreCards = ( button, selector ) => {
	const cardsButton = document.querySelector( button )
	const cards = document.querySelectorAll(selector)

	if ( ! cardsButton ) return

	cardsButton.addEventListener( 'click', () => {
		if ( ! cards.length ) {
			cardsButton.remove()
			return
		}

		for ( let i = 0; i < 10; i++ ) {
			if ( ! cards[i] ) break
			cards[i].classList.add( 'visible' )
		}

		if ( cards.length <= 10 ) cardsButton.remove()
	} )
}
