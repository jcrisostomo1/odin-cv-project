import React, {Component} from "react";
import General from "./components/General";
import './styles/App.css' 
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
        <General/>
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
