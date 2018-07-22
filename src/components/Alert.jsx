import React, { Component } from 'react';

class Alert extends Component {
	render() {
		let type = `alert alert-${this.props.type}`
		return(
			<div className={type} role="alert">
			  {this.props.content}
			</div>
		);
	}
}

export default Alert;