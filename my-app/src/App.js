import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import logoPlatzi from './logo-platzi.png'

class App extends Component {
  // El estado de las variables que quiero cambiar
  state = {
    logo:logo,
  }
  onClick(){
    this.setState({
      logo:logoPlatzi,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactCSSTransitionGroup
            transitionName="fade" 
            transitionEnterTimeout={1000}  // Duracion en ms de las ani
            transitionLeaveTimeout={1000}
          >
            <img 
              key={this.state.logo} //Cada que haya un cambio hace leave
              src={this.state.logo} 
              className="App-logo" 
              alt="logo" />
          </ReactCSSTransitionGroup>
          <button onClick={this.onClick.bind(this)} >CLick me</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
