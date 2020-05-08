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
    showPersons: false,
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
  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className='App'>
        {this.state.showPersons
          ? this.state.persons.map((person, index) => (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={this.deletePerson}
              />
            ))
          : null}
        <button style={style} onClick={this.toggleHandler}>
          Change state
        </button>
      </div>
    );
  }
}

export default App;
