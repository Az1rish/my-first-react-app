// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import moment from 'moment';
import math from 'mathjs';

class App extends Component {
  render() {
    const right_now = moment();

    const formatted_right_now = right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");

    right_now.add(7, 'days');
    right_now.add(4, 'hours');
    right_now.add(32, 'minutes');

    const formatted_later = right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");

    const f1 = math.fraction(4,7);
    const f2 = math.fraction(3,8);
    const f3 = math.add(f1,f2);
    const formatted_fraction = math.format(f3, { fraction: 'ratio' });

    return (
      <div className="App">
        <h1>Playing with dates</h1>
        <h2>The date and time right now is: </h2>
        <p>{formatted_right_now}</p>

        <h2>The date and time 7 days, 4 hours and 32 minutes from now is: </h2>
        <p>{formatted_later}</p>

        <h3>4/7 + 3/8 = </h3>
        <p>{formatted_fraction}</p>
      </div>
    );
  }
}




/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Who knows React?</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
}*/

export default App;
