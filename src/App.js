import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Para from './Para';
import Clock from './Clock';
import Item from './todo/Item';
import Todo from './todo/Todo';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Todo/>
        {/* <Para/> */}
        {/* <Table/> */}
      </div>
    );
  }
}

export default App;
