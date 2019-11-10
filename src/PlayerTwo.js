import React from 'react'

class PlayerTwo extends React.Component {

	render() {

		const containerStyle = {
			margin: '2%',
			padding: '2% 5%',

			border: '2px solid red',
			borderRadius: '5px',
			boxShadow: '3px 5px 7px red',

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
			
			border: '2px solid red',
			borderRadius: '3px',
			backgroundColor: 'rgba(250, 10, 10, 0.6)',
			boxShadow: '1px 3px 5px red'
		}

		return (
			<div style={ containerStyle }>
				<h1 style={ headerStyle }>Player Two</h1>
				<p style={ paragraphStyle }>Name { this.props.name }</p>
				<p style={ paragraphStyle }>Played number of times: { this.props.playedTimes }</p>

				<button style={ buttonStyle } id="playerTwoButton" onClick={ this.props.play }>{ this.props.buttonContent }</button>
			</div>
		)
	}
}

export default PlayerTwo