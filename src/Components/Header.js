//Header to display a text with the actual PLAYER

import React from 'react'
import {GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN} from "../Constants"

const Header = ({gameState, currentPlayer, winPlayer}) => {

	const returnLabel = () => {  //var with the main label text
		switch(gameState){
			case GAME_STATE_PLAYING:   //Label of current player turn
				return <div>Player {currentPlayer} Turn</div>
			
			case GAME_STATE_WIN:
				return <div>Player {winPlayer} Has Won</div>

			case GAME_STATE_DRAW:
				return <div>Game is a Draw!</div>
			
			default:
		}
	}

  return (
	<div className='panel header'>  {/*two different classes, get different styles from CSS*/}
		<div className='header-text'>{returnLabel()}</div>
	</div>
  )
}

export default Header;