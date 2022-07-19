import React, {Component} from "react";
import '../styles/General.css'

class General extends Component {
	constructor() {
      super();
  }

  render() {
    return (
      <div>
				<form onSubmit>
          <label htmlFor="taskInput">First Name: </label>
          <input type="text" id="taskInput"/>
					<button>Edit</button>
					<label htmlFor="taskInput">First Name: </label>
          <input type="text" id="taskInput"/>
					<button>Edit</button>
        </form>
      </div>
    );
	}
}
export default General;
