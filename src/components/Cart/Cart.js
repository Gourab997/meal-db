import React from 'react';

const Cart = (props) => {

    const {strMeal} = props.cart
   
    return (
        <div>
      <p>{strMeal}</p>
        </div>
    );
};

export default Cart;