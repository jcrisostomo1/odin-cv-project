import React, { Component } from 'react'
import "../styles/Education.css"

class Education extends Component {
	constructor(props) {
		super(props)

}

  render() {
    return (
      <div className='main'>
      <form>
        <div>
          <input type="text" id="firstName" placeholder="School Name" required/>
        </div> 
        <div>
          <input type="text" id="lastName" placeholder="City" required/>
        </div> 
        <div>
          <input type="email" id="email" placeholder="Degree" required/>
        </div> 
        <div>
          <input  type="tel" id="phone" placeholder="Subject" required/>
        </div> 
        <div>
          <input  type="tel" id="phone" placeholder="To" required/>
        </div> 
        <div>
          <input  type="tel" id="phone" placeholder="From" required/>
        </div> 
      </form>
      <button>Delete</button>
    </div>
    )
  }
}

export default Education;


