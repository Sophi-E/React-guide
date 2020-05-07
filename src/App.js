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
  render() {
    return (
      <div className='App'>
        React complete guide
        {this.state.persons.map((person) => (
          <Person name={person.name} age={person.age} />
        ))}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
