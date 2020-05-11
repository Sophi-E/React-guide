import React from 'react';
import './BuildControls.css';
import BuildContol from './BuildControl/BuildContol';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className='BuildControls'>
      {controls.map((ctrl) => {
        <BuildContol key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
