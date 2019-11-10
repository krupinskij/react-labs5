import React from 'react'
import { relative } from 'path'

class PlayerOne extends React.Component {

	

	render() {
		const containerStyle = {
			margin: '2%',
			padding: '2% 5%',

			border: '2px solid green',
			borderRadius: '5px',
			boxShadow: '3px 5px 7px green',

			'position': 'relative'
		}

		const headerStyle = {
			fontSize: '220%',
			textDecoration: 'underline'
		}

		const paragraphStyle = {
			fontSize: '120%'
		}

		const buttonStyle = {
			position: 'absolute',
			right: '10%',
			bottom: '10%',

			fontSize: '120%',
			padding: '1%',
			width: '250px',
			
			border: '2px solid green',
			borderRadius: '3px',
			backgroundColor: 'rgba(10, 250, 10, 0.6)',
			boxShadow: '1px 3px 5px green'
		}

		return (
			<div style={ containerStyle }>
				<h1 style={ headerStyle }>Player One</h1>
				<p style={ paragraphStyle }>Name { this.props.name }</p>
				<p style={ paragraphStyle }>Played number of times: { this.props.playedTimes }</p>

				<button style={ buttonStyle } id="playerOneButton" onClick={ this.props.play }>{ this.props.buttonContent }</button>
			</div>
		)
	}
}

export default PlayerOne