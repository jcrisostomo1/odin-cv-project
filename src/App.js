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
    preview: false,
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
        start: childData.edStart,
        end: childData.edEnd,
      },
      experience: {
        companyName: childData.companyName,
        positionTitle: childData.positionTitle,
        jobDescription: childData.jobDescription,
        start: childData.exStart,
        end: childData.exEnd
      }
    });
  }

  this.showPreview = () => {
    this.setState({
      preview: !this.state.preview,
    })
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
    const { university, city, degree, subject, edStart, edEnd} = this.state.education;
    const { companyName, positionTitle, jobDescription, exStart, exEnd } = this.state.experience;
    const { preview } = this.state;
    return (
      <div>
        <header> 
          <h1>CV Application</h1>
        </header>
        <main>
        {preview === false?<>
        <General title={"Information"} getStateInfo={this.getStateInfo}/>
        <Education title={"Education"} getStateInfo = {this.getStateInfo}/>
        <Experience title={"Experience"} getStateInfo={this.getStateInfo}/>
        <button onClick={this.showPreview}>Preview</button></>:<Output firstName={firstName} lastName={lastName} email={email} phone={phone}/>}
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
