import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Output from "./components/Output";
import './styles/App.css' 
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor() {
    super();
  
  this.state = {
    educationItems: 1,
    general: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    education: {
      university: '',
      city: '',
      degree: '',
      subject: '',
      start: '',
      end: '',
    },
    experience: {
      companyName: '',
      positionTitle: '',
      jobDescription: '',
      start: '',
      end: ''
    },
  }
  
  this.getStateInfo = (childData) => {
    this.setState({
      general: {
        firstName: childData.firstName,
        lastName: childData.lastName,
        email: childData.email,
        phone: childData.phone
      },
      education: {
        university: childData.university,
        city: childData.city,
        degree: childData.degree,
        subject: childData.subject,
        start: childData.start,
        end: childData.end,
      },
      experience: {
        companyName: '',
        positionTitle: '',
        jobDescription: '',
        start: '',
        end: ''
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
        <General getStateInfo={this.getStateInfo}/>
        <h3>Education</h3>
        {Array(this.state.educationItems).fill(0).map((_, key) => <Education key={key} getStateInfo = {this.getStateInfo}/>)}
        <button onClick={this.addEducation}>Add Education</button>
        <h3>Experience</h3>
        <Experience getStateInfo={this.getStateInfo}/>
        <Output firstName={firstName} lastName={lastName} email={email} phone={phone}/>
        <h3>{university}</h3>
        <h3>{city}</h3>
        <h3>{degree}</h3>
        <h3>{subject}</h3>
        <h3>{start}</h3>
        <h3>{end}</h3>
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
