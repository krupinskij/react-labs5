import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

	state = {
		playerOneName: "",
		playerTwoName: "",

		playerOneButton: "Play",
		playerTwoButton: "Play",

		playerOneButtonClicked: 0,
		playerTwoButtonClicked: 0,
	}

	changeName = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	play = (event) => {
		const targetButton = event.target.id;
		const playedTimes = this.state[targetButton+"Clicked"] + 1;

		if(this.state[targetButton]==="Play") {
			this.setState({
				playerOneButton: "Play",
				playerTwoButton: "Play",
				[targetButton]: "This user is playing now",
				[targetButton+"Clicked"]: playedTimes
			})
		} else {
			this.setState({
				[targetButton]: "Play"
			})
		}
		
	}

	render() {

		const containerStyle = {
			margin: '2% 5%',

			display: 'grid',
			gridTemplate: '30px 30px / 230px auto',
			gap: '3px',
		}

		const labelStyle = {
			fontSize: '120%',
			fontWeight: 'bold'
		}

		return (
			<div>
				<PlayerOne name={ this.state.playerOneName } buttonContent={this.state.playerOneButton }
						play={ this.play } playedTimes={ this.state.playerOneButtonClicked } />
				<PlayerTwo name={ this.state.playerTwoName } buttonContent={this.state.playerTwoButton }
						play={ this.play } playedTimes={ this.state.playerTwoButtonClicked } />

				<div style={ containerStyle }>
					<label style={ labelStyle } htmlFor="playerOneInput">Set Name of Player One: </label>
					<input type="text" name="playerOneName" id="playerOneInput" onChange={ this.changeName }/>

					<label style={ labelStyle } htmlFor="playerTwoInput">Set Name of Player Two: </label>
					<input type="text" name="playerTwoName" id="playerTwoInput" onChange={ this.changeName }/>
				</div>
				
			</div>
		)
	}
}

export default GameAdmin