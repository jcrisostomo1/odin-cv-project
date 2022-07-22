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
    educationItems: 1,
    education: {
      university: '',
      city: '',
      degree: '',
      subject: '',
      start: '',
      end: '',
    },
    general: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }
  
  this.getGeneralInfo = (childData) => {
    this.setState({
      education: {
        university: childData.university,
        city: childData.city,
        degree: childData.degree,
        subject: childData.subject,
        start: childData.start,
        end: childData.end,
      },
      general: {
        firstName: childData.firstName,
        lastName: childData.lastName,
        email: childData.email,
        phone: childData.phone
      }
    });
  }

  this.addEducation = () => {
    this.setState({
      educationItems: this.state.educationItems + 1
    })
    console.log(this.state.educationItems)
  }
  
}

  render() {
    const { firstName, lastName, email, phone} = this.state.general;
    const { university, city, degree, subject, start, end} = this.state.education;
    return (
      <div>
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
        <h3>Information</h3>
        <General getGeneralInfo={this.getGeneralInfo}/>
        <h3>Education</h3>
        {Array(this.state.educationItems).fill(0).map((_, key) => <Education key={key} getGeneralInfo = {this.getGeneralInfo}/>)}
        <button onClick={this.addEducation}>Add Education</button>
        <h3>Experience</h3>
        <Output firstName={firstName} lastName={lastName} email={email} phone={phone}/>
        <h6>{university}</h6>
        <h6>{city}</h6>
        <h6>{degree}</h6>
        <h6>{subject}</h6>
        <h6>{start}</h6>
        <h6>{end}</h6>
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
