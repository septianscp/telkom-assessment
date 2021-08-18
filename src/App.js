import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import List from '../src/Component/list'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h3>Septianscp Repositories</h3>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <List />
      </header>
    </div>
  );
}

export default App;
