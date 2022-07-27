import React, { Component } from 'react'

class Education extends Component {
	constructor(props) {
		super(props)
  
    this.state = {
      id: this.props.id,
      educationInfoSaved: false,
      university: '',
      city: '',
      degree: '',
      subject: '',
      edStart: '',
      edEnd: '',
  }
}

handleChange  = (e) =>  {
  this.setState({
    [e.target.id]: e.target.value,
  })
}

onSaveInfo = (e) => {
  e.preventDefault();
  console.log(this.state)
  this.props.getStateInfo(this.state);
  this.setState({
    educationInfoSaved: true
  })
}

onEditInfo = (e) => {
  e.preventDefault();
  this.setState({
    educationInfoSaved: false
  })
}

  render() {
    console.log(this.props)
    const { id, educationInfoSaved, university, city, degree, subject, edStart, edEnd } = this.state;

    return (
      <>
        <div className='main'>
        <form>
          <div>
            {educationInfoSaved?<p><strong>University: </strong>{university}</p>:<input onChange={this.handleChange} value={university} type="text" id="university" placeholder="University" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p><strong>City: </strong>{city}</p>:<input onChange={this.handleChange} value={city} type="text" id="city" placeholder="City" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p><strong>Degree: </strong>{degree}</p>:<input onChange={this.handleChange} value={degree} type="text" id="degree" placeholder="Degree" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p><strong>Subject: </strong>{subject}</p>:<input onChange={this.handleChange} value={subject} type="text" id="subject" placeholder="Subject" required/>}
          </div> 
          <div>
            {educationInfoSaved?<p><strong>Start: </strong>{edStart}</p>:<><label htmlFor='edStart'>Start: </label>
            <input onChange={this.handleChange} value={edStart} type="date" id="edStart" required/></>}
          </div> 
          <div>
            {educationInfoSaved?<p><strong>End: </strong>{edEnd}</p>:<><label htmlFor='edEnd'>End: </label>
            <input onChange={this.handleChange} value={edEnd} type="date" id="edEnd" required/></>}
          </div>
          {educationInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button>}
          <button type="button" onClick={() => this.props.handleDelete('education', id)}>Delete</button>
        </form>
      </div>
    </>
    )}
  }

export default Education;
