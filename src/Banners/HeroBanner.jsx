import React from 'react'

export default class HeroBanner extends React.Component {
	render() {
		return (
			<div className={`banner banner__${this.props.color}`}>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}