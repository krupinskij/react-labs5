import React from 'react'

class PlayerOne extends React.Component {

	render() {
		return (
			<div>
				<h1>Player One</h1>
				<p>Name { this.props.name }</p>
				<p>Played number of times: { this.props.playedTimes }</p>

				<button id="playerOneButton" onClick={ this.props.play }>{ this.props.buttonContent }</button>
			</div>
		)
	}
}

export default PlayerOne