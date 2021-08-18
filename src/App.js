import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import List from '../src/Component/list';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <h3>Septianscp Repositories</h3>
      <List />
    </div>
  );
}

export default App;
