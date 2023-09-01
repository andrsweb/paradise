document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMoreCards( '.show__more' )
} )

const showMoreCards = ( button ) => {
	const cardsButton = document.querySelector( button )

	if ( ! cardsButton ) return

	cardsButton.addEventListener( 'click', () => {
		const cards = document.querySelectorAll( '.event:not(.visible)' )

		if ( ! cards.length ) {
			cardsButton.remove()
			return
		}

		for ( let i = 0; i < 10; i++ ) {
			if ( ! cards[i] ) break
			cards[i].classList.add( 'visible' )
		}

		if ( cards.length <= 9 ) cardsButton.remove()
	} )
}
