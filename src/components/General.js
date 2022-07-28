import React, {Component} from "react";
import generalStyles from "../styles/General.module.css"

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
      <div className={generalStyles.main}>
				<div className={generalStyles.form}>
          <div>
            {generalInfoSaved?<p><strong>First Name: </strong>{firstName}</p>
            :<><label htmlFor="firstName">First Name:</label><input onChange={this.handleChange} value={firstName} type="text" id="firstName" placeholder="John" required/></>}
          </div> 
          <div>
            {generalInfoSaved?<p><strong>Last Name: </strong>{lastName}</p>
            :<><label htmlFor="lastName">Last Name:</label><input onChange={this.handleChange} value={lastName} type="text" id="lastName" placeholder="johndoe@test.com" required/></>}
          </div> 
          <div>
            {generalInfoSaved?<p><strong>Email: </strong>{email}</p>
            :<><label htmlFor="email">Email:</label><input onChange={this.handleChange} value={email} type="email" id="email" placeholder="Email" required/></>}
          </div> 
          <div>
            {generalInfoSaved?<p><strong>Phone: </strong>{phone}</p>
            :<><label htmlFor="phone">Phone:</label><input onChange={this.handleChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"id="phone" placeholder="123-456-7890" required/></>}
          </div> 
        </div>
        <div className={generalStyles.button} >
          {generalInfoSaved?<button onClick={this.onEditInfo}>Edit</button>:<button onClick={this.onSaveInfo}>Save</button>}
          </div>
      </div>
      </>
    )
  }
}

export default General;
