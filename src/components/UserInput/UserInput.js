import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <input type='test' onChange={props.changed} value={props.currentName} />
    </div>
  );
};

export default UserInput;
