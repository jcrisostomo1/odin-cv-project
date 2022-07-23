import React, { Component } from 'react'

export default class Experience extends Component {

  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      positionTitle: '',
      jobDescription: '',
      start: '',
      end: ''
    }

    this.handleChange  = (e) =>  {
      console.log(e.target.id)
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
    const {companyName, positionTitle, jobDescription, start, end} = this.state;
    
    return (
      <>
      <h3>{this.props.title}</h3>
      <div className='main'>
      <form onSubmit = {this.onSubmitTask}>
        <div>
          <input onChange={this.handleChange} value={companyName} type="text" id="companyName" placeholder="Company" required/>
        </div> 
        <div>
          <input onChange={this.handleChange} value={positionTitle} type="text" id="positionTitle" placeholder="Position" required/>
        </div> 
        <div>
         <textarea onChange={this.handleChange} value={jobDescription} id="jobDescription" placeholder="Job Description" required/>
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

