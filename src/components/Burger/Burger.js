import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  );
  return (
    <div className='Burger'>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default Burger;
