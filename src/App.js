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
    educationItems: [],
    experienceItems: []
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
    let key = childData.id;
    console.log(key)
    this.setState(prevState => ({
      experienceItems: prevState.experienceItems.map(item => item.id === key ? {...item, experience:{
        companyName: childData.companyName,
        positionTitle: childData.positionTitle,
        jobDescription: childData.jobDescription,
        exStart: childData.exStart,
        exEnd: childData.exEnd
      } } : item)
    }))
  }

  renderEdComponents = () => 
    this.state.educationItems.map((item) => (<Education key={item.id} id={item.id} getStateInfo={this.getEducationInfo}></Education>))

  renderExComponents = () => 
    this.state.experienceItems.map((item) => (<Experience key={item.id} id={item.id} getStateInfo={this.getExperienceInfo}></Experience>))

  handleOnClick = (type) => {
    if (type === 'education') {
      this.setState({
        educationItems: [
          ...this.state.educationItems, {id: uniqid(), education: {} }
        ]
      })
    } else {
      this.setState({
        experienceItems: [
          ...this.state.experienceItems, {id: uniqid(), experience: {}}
        ]
      })
    }
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
        <button onClick={()=> this.handleOnClick('education')}>Add Education</button>
        <h3>Experience</h3>
        {this.renderExComponents()}
        <button onClick={()=> this.handleOnClick('experience')}>Add Experience</button>
        <button onClick={this.showPreview}>Preview</button></>:<Output showPreview={this.showPreview} {...this.state}/>}
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
