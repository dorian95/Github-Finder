import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  // life cycle method, renders the output
  render() {
    return (
      // JSX must have 1 parent element
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
