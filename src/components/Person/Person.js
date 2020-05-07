import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        My name is {props.name} and i'm {props.age} old
      </p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
