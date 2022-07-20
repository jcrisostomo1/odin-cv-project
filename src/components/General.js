import React, {Component} from "react";
import '../styles/General.css'
import Output from "./Output";

class General extends Component {
	constructor(props) {
      super(props);

  this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
  }

  this.handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  this.onSubmitTask = (e) => {
    e.preventDefault();
    this.props.getGeneralInfo(this.state);
  };

  this.onTrigger = (e) => {
    this.props.parentCallback(e.target.myname.value);
    e.preventDefault();
  }
}

  render() {
    const { firstName, lastName, email, phone } = this.state;
    
    return (
      <div>
				<form onSubmit = {this.onSubmitTask}>
          <div>
            <input onChange={this.handleChange} value={firstName} type="text" id="firstName" placeholder="First Name"/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={lastName} type="text" id="lastName" placeholder="Last Name"/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={email} type="text" id="email" placeholder="Email"/>
          </div> 
          <div>
            <input onChange={this.handleChange} value={phone} type="text" id="phone" placeholder="Phone"/>
          </div> 
          <button>Submit</button>
        </form>
      </div>
    );
	}
}

export default General;
