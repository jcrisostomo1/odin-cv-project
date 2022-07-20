import React, { Component } from 'react'
class Output extends Component {

	constructor(props) {
    super(props);

	}

	render() {
		const { firstName, lastName, email, phone } = this.props;

		return (
			<>
			<div>Output</div>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			</>
			
		)
	}
}

export default Output;
