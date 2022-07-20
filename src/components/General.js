import React, {Component} from "react";
import '../styles/General.css'

class General extends Component {
	constructor() {
      super();

  // this.state = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     firstName
  //   })
  // }
}
  render() {
    return (
      <div>
				<form onSubmit>
          <div>
            <input type="text" id="firstName" placeholder="First Name"/>
					  {/* <button>Edit</button> */}
          </div> 
          <div>
            <input type="text" id="lastName" placeholder="Last Name"/>
					  {/* <button>Edit</button> */}
          </div> 
          <div>
            <input type="text" id="email" placeholder="Email"/>
					  {/* <button>Edit</button> */}
          </div> 
          <div>
            <input type="text" id="phone" placeholder="Phone"/>
					  {/* <button>Edit</button> */}
          </div> 
          <button>Submit</button>
        </form>
      </div>
    );
	}
}

export default General;
