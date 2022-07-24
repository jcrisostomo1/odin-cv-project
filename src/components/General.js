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
            {generalInfoSaved === false?<input onChange={this.handleChange} value={firstName} type="text" id="firstName" placeholder="First Name" required/>:<p>First Name: {firstName}</p>}
          </div> 
          <div>
            {generalInfoSaved === false?<input onChange={this.handleChange} value={lastName} type="text" id="lastName" placeholder="Last Name" required/>:<p>Last Name: {lastName}</p>}
          </div> 
          <div>
            {generalInfoSaved === false?<input onChange={this.handleChange} value={email} type="email" id="email" placeholder="Email" required/>:<p>Email: {email}</p>}
          </div> 
          <div>
            {generalInfoSaved === false?<input onChange={this.handleChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"id="phone" placeholder="Phone" required/>:<p>Phone: {phone}</p>}
          </div> 
          {generalInfoSaved===false?<button onClick={this.onSaveInfo}>Save</button>:<button onClick={this.onEditInfo}>Edit</button>}
        </form>
      </div>
      </>
    );
}
}

export default General;
