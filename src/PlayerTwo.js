import React from 'react'

class PlayerTwo extends React.Component {

	render() {
		return (
			<div>
				<h1>Player Two</h1>
				<p>Name { this.props.name }</p>
				<p>Played number of times: { this.props.playedTimes }</p>

				<button id="playerTwoButton" onClick={ this.props.play }>{ this.props.buttonContent }</button>
			</div>
		)
	}
}

export default PlayerTwo