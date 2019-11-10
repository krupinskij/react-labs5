import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

	render() {
		return (
			<div>
				<PlayerOne />
				<PlayerTwo />

				<input type="text" name="playerOneName" id="playerOneInput"/>
				<input type="text" name="playerTwoName" id="playerTwoInput"/>
			</div>
		)
	}
}

export default GameAdmin