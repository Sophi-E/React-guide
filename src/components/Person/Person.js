import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h3>
        My name is {props.name} and i'm {props.age} old
      </h3>
    </div>
  );
};

export default Person;
