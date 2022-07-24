import React, {Component} from "react";
import '../styles/General.css'
import Output from "./Output";

class General extends Component {
	constructor(props) {
      super(props);

  this.state = {
      generalInfoSaved: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
  }

  this.handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  this.onSaveInfo = (e) => {
    e.preventDefault();
    this.props.getStateInfo(this.state);
    console.log(this.state)
    this.setState({
      generalInfoSaved: true
    })
  }

  this.onEditInfo = (e) => {
    e.preventDefault();
    this.setState({
      generalInfoSaved: false,
    })
  }
}

  render() {
    const { firstName, lastName, email, phone, generalInfoSaved } = this.state;
  
    return (
      <>
      <h3>{this.props.title}</h3>
      <div>
				<form>
          <div>
            {generalInfoSaved?<p>First Name: {firstName}</p>:<input onChange={this.handleChange} value={firstName} type="text" id="firstName" placeholder="First Name" required/>}
          </div> 
          <div>
            {generalInfoSaved?<p>Last Name: {lastName}</p>:<input onChange={this.handleChange} value={lastName} type="text" id="lastName" placeholder="Last Name" required/>}
          </div> 
          <div>
            {generalInfoSaved?<p>Email: {email}</p>:<input onChange={this.handleChange} value={email} type="email" id="email" placeholder="Email" required/>}
          </div> 
          <div>
            {generalInfoSaved?<p>Phone: {phone}</p>:<input onChange={this.handleChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"id="phone" placeholder="Phone" required/>}
          </div> 
          {generalInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button>}
        </form>
      </div>
      </>
    )
  }
}

export default General;
