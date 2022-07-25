import React, { Component } from 'react'
class Output extends Component {

	constructor(props) {
    super(props);

	}

	render() {
		const { firstName, lastName, email, phone} = this.state.general;
    const { university, city, degree, subject, edStart, edEnd} = this.state.education;
    const { companyName, positionTitle, jobDescription, exStart, exEnd } = this.state.experience;
		
		return (
			<>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			</>
			
		)
	}
}

export default Output;
