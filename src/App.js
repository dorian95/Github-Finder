import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // life cycle method, renders the output
  render() {
    /*
    // without JSX,
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'Hello from React')
    );
    */
    const name = 'John Doe';
    const loading = true;

    return (
      // JSX must have 1 parent element
      <div className='App'>
        {loading ? <h4>Loading</h4> : <h1>Hello {name}</h1>}
      </div>
    );
  }
}

export default App;
