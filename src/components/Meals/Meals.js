import React from 'react';
import './Meals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faPizzaSlice} />
const Meals = (props) => {

    const { strMealThumb , strMeal} = props.Food
    return (
        <div className="meals">
            <div>
            <img src={strMealThumb} alt="" />
            <p>{strMeal}</p>

            <button onClick={()=>props.handleMealname(props.Food)} >{element} add meal</button>
            </div>
        

    
        </div>
    );
};

export default Meals;