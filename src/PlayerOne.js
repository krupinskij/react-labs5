import React from 'react'

class PlayerOne extends React.Component {

	render() {
		return (
			<div>
				<h1>Player One</h1>
				<p>Name { this.props.name }</p>
			</div>
		)
	}
}

export default PlayerOne