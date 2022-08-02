import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import uniqid from 'uniqid';
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
    this.state.educationItems.map((item) => (<Education key={item.id} id={item.id} getStateInfo={this.getEducationInfo} handleDelete={this.handleDelete}></Education>))

  renderExComponents = () => 
    this.state.experienceItems.map((item) => (<Experience key={item.id} id={item.id} getStateInfo={this.getExperienceInfo} handleDelete={this.handleDelete}></Experience>))

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

  handleDelete = (type, id) => {
    if (type === 'education') {
      this.setState({
        educationItems: this.state.educationItems.filter(item => item.id !== id)
      })
    } else {
      this.setState ({
        experienceItems: this.state.experienceItems.filter(item => item.id !== id)
      })
    }
  }
  
  render() {
    return (
      <div>
        <header> 
          <h1>CV Application</h1>
        </header>
        <main>
        <General title={"General Information"} getStateInfo={this.getGeneralInfo}/>
        <h3>Education</h3>
        {this.renderEdComponents()}
        <button onClick={()=> this.handleOnClick('education')}>Add Education</button>
        <h3>Experience</h3>
        {this.renderExComponents()}
        <button onClick={()=> this.handleOnClick('experience')}>Add Experience</button>
        </main>
        <footer>
          <a href="https://github.com/jcrisostomo1" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg"></i></a>
          <p>Made by: jcrisostomo1</p>
      </footer>
      </div>
    );
  }
  
}

export default App;
