import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Output from "./components/Output";
import './styles/App.css' 
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor() {
    super();
  
  this.state = {
    general: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }
  
  this.getGeneralInfo = (childData) => {
    this.setState({
      general: {
        firstName: childData.firstName,
        lastName: childData.lastName,
        email: childData.email,
        phone: childData.phone
      }
    });
  }
  
}

  render() {
    const { firstName, lastName, email, phone} = this.state.general;
    return (
      <div>
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
        <General getGeneralInfo={this.getGeneralInfo}/>
        <Output firstName={firstName} lastName={lastName} email={email} phone={phone}/>
        </main>
        <footer>
          <a href="https://github.com/jcrisostomo1" target="_blank"><i className="fa fa-github fa-lg"></i></a>
          <p>Made by: jcrisostomo1</p>
      </footer>
      </div>
    );
  }
  
}

export default App;
