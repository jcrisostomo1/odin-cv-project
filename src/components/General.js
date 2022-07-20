import React, {Component} from "react";
import '../styles/General.css'
import Output from "./Output";

class General extends Component {
	constructor() {
      super();

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
    console.log(this.state)
    
  };

}


  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <div>
				<form  >
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
        <h1>{firstName}</h1>
        <Output firstName={firstName} lastName={lastName} email={email} phone={phone}/>
      </div>
    );
	}
}

export default General;
