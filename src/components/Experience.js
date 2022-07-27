import React, { Component } from 'react'

export default class Experience extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      experienceInfoSaved: false,
      companyName: '',
      positionTitle: '',
      jobDescription: '',
      exStart: '',
      exEnd: '',
    }

  }

  handleChange  = (e) =>  {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  onSaveInfo = (e) => {
    e.preventDefault();
    this.props.getStateInfo(this.state);
    this.setState({
      experienceInfoSaved: true
    })
  }

  onEditInfo = (e) => {
    e.preventDefault();
    this.setState({
      experienceInfoSaved: false
    })
  }

  render() {
    const { id, experienceInfoSaved, companyName, positionTitle, jobDescription, exStart, exEnd} = this.state;
    
    return (
      <>
      <div className='main'>
      <form>
        <div>
          {experienceInfoSaved?<p><strong>Company: </strong>{companyName}</p>:<input onChange={this.handleChange} value={companyName} type="text" id="companyName" placeholder="Company" required/>}
        </div> 
        <div>
          {experienceInfoSaved?<p><strong>Position: </strong>{positionTitle}</p>:<input onChange={this.handleChange} value={positionTitle} type="text" id="positionTitle" placeholder="Position" required/>}
        </div> 
        <div>
         {experienceInfoSaved?<p><strong>Job Description: </strong>{jobDescription}</p>:<textarea onChange={this.handleChange} value={jobDescription} id="jobDescription" placeholder="Job Description" required/>}
        </div> 
        <div>
          {experienceInfoSaved?<p><strong>Start: </strong>{exStart}</p>:<><label htmlFor='exStart'>Start: </label>
          <input onChange={this.handleChange} value={exStart} type="date" id="exStart" required/></>}
        </div> 
        <div>
          {experienceInfoSaved?<p><strong>End: </strong>{exEnd}</p>:<><label htmlFor='exEnd'>End: </label>
          <input onChange={this.handleChange} value={exEnd} type="date" id="exEnd" required/></>}
        </div>
        {experienceInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button> }
        <button type="button" onClick={()=>this.props.handleDelete('experience', id)}>Delete</button>
      </form>
      </div>
      </>
    )}
}

