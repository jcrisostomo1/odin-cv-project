import React, { Component } from 'react'
class Output extends Component {

	constructor(props) {
    super(props);

	}

	render() {
		console.log(this.props)
		const { firstName, lastName, email, phone} = this.props.general;
    const { university, city, degree, subject, edStart, edEnd} = this.props.education;
    const { companyName, positionTitle, jobDescription, exStart, exEnd } = this.props.experience;
		
		return (
			<>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<button>Edit</button>
			</>
			
		)
	}
}

export default Output;
