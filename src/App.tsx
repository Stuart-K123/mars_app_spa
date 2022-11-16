import React from 'react';
import logo from './images/logo.svg';
import NASA_logo from './images/NASA_logo.svg';
import './App.css';
import {Section} from "./components/section";
import {section1} from "./text-src/section1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Section {...section1}/>
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

export default App;
