import React from 'react'

class PlayerTwo extends React.Component {

	render() {
		return (
			<div>
			<h1>Player Two</h1>
				<p>Name { this.props.name }</p>
			</div>
		)
	}
}

export default PlayerTwo