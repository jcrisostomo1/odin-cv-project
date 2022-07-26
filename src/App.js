import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Output from "./components/Output";
import uniqid from 'uniqid';
import './styles/App.css' 
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor() {
    super();
  
  this.state = {
    preview: false,
    general: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    experience: {
      companyName: '',
      positionTitle: '',
      jobDescription: '',
      start: '',
      end: ''
    },
    educationItems: []
  }
}
  getGeneralInfo = (childData) => {
    this.setState({
      general: {
        firstName: childData.firstName,
        lastName: childData.lastName,
        email: childData.email,
        phone: childData.phone
      }
    })
  }

  getEducationInfo = (childData) => {
    let key = childData.id;
    console.log(key)
    this.setState(prevState => ({
      educationItems: prevState.educationItems.map(item => item.id === key? {...item, education: {university: childData.university,
        city: childData.city,
        degree: childData.degree,
        subject: childData.subject,
        edStart: childData.edStart,
        edEnd: childData.edEnd} } : item)
      }))
    }

  getExperienceInfo = (childData) => {
    this.setState({
      experience: {
        companyName: childData.companyName,
        positionTitle: childData.positionTitle,
        jobDescription: childData.jobDescription,
        exStart: childData.exStart,
        exEnd: childData.exEnd
      },
    })
  }

  renderEdComponents = () => 
    this.state.educationItems.map((item) => (<Education key={item.id} id={item.id} getStateInfo={this.getEducationInfo}></Education>))

  addEducation = () => {
    this.setState({
      educationItems: [
        ...this.state.educationItems, {id: uniqid(), education: {} }
      ]
    })
  }
    
  showPreview = () => {
    this.setState({
      preview: !this.state.preview,
    })
    console.log(this.state)
  }
  
  render() {
    const { preview } = this.state;
    return (
      <div>
        <header> 
          <h1>CV Application</h1>
        </header>
        <main>
        {preview === false?<>
        <General title={"General Information"} getStateInfo={this.getGeneralInfo}/>
        <h3>Education</h3>
        {this.renderEdComponents()}
        <button onClick={this.addEducation}>Add Education</button>
        <Experience title={"Experience"} getStateInfo={this.getExperienceInfo}/>
        <button onClick={this.showPreview}>Preview</button></>:<Output {...this.state}/>}
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
