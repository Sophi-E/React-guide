import React from 'react';
import './BuildControl.css';

const BuildContol = (props) => {
  return (
    <div>
      <div className='BuildControl'>{props.label}</div>
      <button>Less</button>
      <button>More</button>
    </div>
  );
};

export default BuildContol;
