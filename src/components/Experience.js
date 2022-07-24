import React, { Component } from 'react'

export default class Experience extends Component {

  constructor(props) {
    super(props)

    this.state = {
      experienceInfoSaved: false,
      companyName: '',
      positionTitle: '',
      jobDescription: '',
      exStart: '',
      exSend: ''
    }

    this.handleChange  = (e) =>  {
      console.log(e.target.id)
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  
    this.onSaveInfo = (e) => {
      e.preventDefault();
      this.props.getStateInfo(this.state);
      console.log(this.state)
      this.setState({
        experienceInfoSaved: true
      })
    };

    this.onEditInfo = (e) => {
      e.preventDefault();
      this.setState({
        experienceInfoSaved: false
      })
    }
  }

  render() {
    const {companyName, positionTitle, jobDescription, exStart, exEnd, experienceInfoSaved} = this.state;
    
    return (
      <>
      <h3>{this.props.title}</h3>
      <div className='main'>
      <form>
        <div>
          {experienceInfoSaved?<p>Company: {companyName}</p>:<input onChange={this.handleChange} value={companyName} type="text" id="companyName" placeholder="Company" required/>}
        </div> 
        <div>
          {experienceInfoSaved?<p>Position: {positionTitle}</p>:<input onChange={this.handleChange} value={positionTitle} type="text" id="positionTitle" placeholder="Position" required/>}
        </div> 
        <div>
         {experienceInfoSaved?<p>Job Description: {jobDescription}</p>:<textarea onChange={this.handleChange} value={jobDescription} id="jobDescription" placeholder="Job Description" required/>}
        </div> 
        <div>
          {experienceInfoSaved?<p>Start: {exStart}</p>:<><label htmlFor='start'>Start: </label>
          <input onChange={this.handleChange} value={exStart} type="date" id="exStart" required/></>}
        </div> 
        <div>
          {experienceInfoSaved?<p>End: {exEnd}</p>:<><label htmlFor='end'>End: </label>
          <input onChange={this.handleChange} value={exEnd} type="date" id="exEnd" required/></>}
        </div>
        {experienceInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button> }
      </form>
      </div>
      </>
    )}
}

