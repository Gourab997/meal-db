import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import './Food.css'
const Food = () => {
    const [foods,setFoods] = useState([]);
    const [carts, setCart] = useState([])
useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=> res.json())
    .then(data=> setFoods(data.meals))
},[])

const handleMealname =(food) =>{
    const newCart = [...carts, food]
  
    setCart(newCart)

}
    return (


        <div className="food">
            <div>
            {
                foods.map(Food=> <Meals key={Food.idMeal} 
                    Food={Food}
                    handleMealname={handleMealname}></Meals>)
            }
            </div>
          {
              carts.map(cart=><Cart key={cart.idMeal} cart={cart}></Cart>)
          }
            <div >
            <h3>Add Name</h3>
             

            </div>


        </div>

       
    );
};

export default Food;