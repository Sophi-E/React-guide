import React, { Component } from 'react';

import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Sophia', age: 26 },
      { name: 'Victor', age: 24 },
      { name: 'Juliet', age: 25 },
    ],
  };
  clickHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Victoria', age: 24 },
        { name: 'Juliet', age: 25 },
      ],
    });
  };

  inputHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Sophie', age: 29 },
        { name: e.target.value, age: 24 },
        { name: 'Juliet', age: 25 },
      ],
    });
  };
  render() {
    return (
      <div className='App'>
        {/* {this.state.persons.map((person) => (
          <Person name={person.name} age={person.age} />
        ))} */}
        <button onClick={this.clickHandler.bind(this, 'Jenifer')}>
          Change state
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.clickHandler.bind(this, 'Jessica')}
          changed={this.inputHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
