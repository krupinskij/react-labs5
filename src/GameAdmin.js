import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

	state = {
		playerOneName: "",
		playerTwoName: ""
	}

	changeName = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div>
				<PlayerOne name={ this.state.playerOneName } />
				<PlayerTwo name={ this.state.playerTwoName } />

				<label htmlFor="playerOneInput">Set Name of Player One: </label>
				<input type="text" name="playerOneName" id="playerOneInput" onChange={ this.changeName }/> <br/>

				<label htmlFor="playerTwoInput">Set Name of Player Two: </label>
				<input type="text" name="playerTwoName" id="playerTwoInput" onChange={ this.changeName }/>
			</div>
		)
	}
}

export default GameAdmin