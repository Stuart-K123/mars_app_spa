import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import {Section} from "./components/section";
import {Counter} from "./components/counter";
import {section1} from "./text-src/section1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Section {...section1}/>
        <Counter/>
        <div className={"App-vspace"}></div>
      </header>
    </div>
  );
}

export default App;
