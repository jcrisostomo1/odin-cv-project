import React, { Component } from 'react'
import "../styles/Education.css"

class Education extends Component {
	constructor(props) {
		super(props)
  
    this.state = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      start: '',
      end: '',
  }

  this.handleChange  = (e) =>  {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  this.onSubmitTask = (e) => {
    e.preventDefault();
    this.props.getStateInfo(this.state);
    console.log(this.state)
  };
}

  render() {
    const { university, city, degree, subject, start, end} = this.state;

    return (
      <>
        <h3>{this.props.title}</h3>
        <div className='main'>
        <form onSubmit = {this.onSubmitTask}>
          <div>
            <input onChange={this.handleChange} value={university} type="text" id="university" placeholder="University" required/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={city} type="text" id="city" placeholder="City" required/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={degree} type="text" id="degree" placeholder="Degree" required/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={subject} type="text" id="subject" placeholder="Subject" required/>
          </div> 
          <div>
            <label htmlFor='start'>Start: </label>
            <input onChange={this.handleChange} value={start} type="date" id="start" required/>
          </div> 
          <div>
            <label htmlFor='end'>End: </label>
            <input onChange={this.handleChange} value={end} type="date" id="end" required/>
          </div>
          <button>Add</button> 
        </form>
      </div>
    </>
    )}
}

export default Education;


