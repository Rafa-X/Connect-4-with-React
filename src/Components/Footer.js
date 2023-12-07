//Footer to display a text with the actual PLAYER

import React from 'react'

//onClickEvent -> callback function to pass in by the prop, as a deconstructed prop need to be inside {}
const Footer = ({onNewGame, onSuggest}) => {
  return (
	<div className='panel footer'>  {/*two different classes, get different styles from CSS*/}
		<button onClick={onNewGame}>New Game</button>
		
	</div>
  )
}

export default Footer;