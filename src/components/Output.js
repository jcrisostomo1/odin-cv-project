import React, { Component } from 'react'
class Output extends Component {

	constructor(props) {
    super(props);
	}


	render() {
		let lol = this.props.educationItems.map(item => item.education.university)
		const { firstName, lastName, email, phone} = this.props.general;
		
		return (
			<>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<button onClick={this.props.showPreview}>Edit</button>
			</>
			
		)
	}
}

export default Output;
