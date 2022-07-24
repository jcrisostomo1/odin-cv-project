import React, { Component } from 'react'
import "../styles/Education.css"

class Education extends Component {
	constructor(props) {
		super(props)
  
    this.state = {
      educationInfoSaved: false,
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
    })
  }

  this.onSaveInfo = (e) => {
    e.preventDefault();
    this.props.getStateInfo(this.state);
    console.log(this.state)
    this.setState({
      educationInfoSaved: true
    })
  }

  this.onEditInfo = (e) => {
    e.preventDefault();
    this.setState({
      educationInfoSaved: false,
    })
  }
}

  render() {
    const { university, city, degree, subject, start, end, educationInfoSaved} = this.state;

    return (
      <>
        <h3>{this.props.title}</h3>
        <div className='main'>
        <form>
          <div>
            {educationInfoSaved?<p>University: {university}</p>:<input onChange={this.handleChange} value={university} type="text" id="university" placeholder="University" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p>City: {city}</p>:<input onChange={this.handleChange} value={city} type="text" id="city" placeholder="City" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p>Degree: {degree}</p>:<input onChange={this.handleChange} value={degree} type="text" id="degree" placeholder="Degree" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p>Subject: {subject}</p>:<input onChange={this.handleChange} value={subject} type="text" id="subject" placeholder="Subject" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p>Start: {start}</p>:<><label htmlFor='start'>Start: </label>
            <input onChange={this.handleChange} value={start} type="date" id="start" required/></>}
          </div> 
          <div>
            {educationInfoSaved?<p>End: {end}</p>:<><label htmlFor='end'>End: </label>
            <input onChange={this.handleChange} value={end} type="date" id="end" required/></>}
          </div>
          {educationInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button>} 
        </form>
      </div>
    </>
    )}
}

export default Education;
