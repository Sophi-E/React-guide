import React, { Component } from 'react';

import './App.css';
import Person from './components/Person/Person';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    username: ['sophia', 'jennifer', 'jasmine'],
  };
  handleChange = (e) => {
    this.setState({
      username: ['amaka', e.target.value, 'happiness'],
    });
  };
  handleClick = () => {
    this.setState({
      username: ['amaka', 'caro', 'happiness'],
    });
  };
  render() {
    return (
      <div className='App'>
        <button onClick={this.handleClick}>Click me!</button>
        <UserInput
          changed={this.handleChange}
          currentName={this.state.username[1]}
        />
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[1]} />
        <UserOutput username={this.state.username[2]} />
      </div>
    );
  }
}

export default App;
