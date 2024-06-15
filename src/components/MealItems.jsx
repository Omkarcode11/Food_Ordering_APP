import React, { useContext } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

function MealItems({id, img, description, price, name }) {
   let {addItems} = useContext(CartContext)

  function handleAddItemCart(){
         addItems({id, img, description, price, name })
  }
  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${img}`} alt='meal-Image' />
        <div>
          <h3>{name}</h3>
          <p className='meal-item-price'>{currencyFormatter.format(price)}</p>
          <p className='meal-item-description'>{description}</p>
        </div>
        <p className='meal-item-actions'>
          {/* <button>Add to Cart</button> */}
          <Button onClick={handleAddItemCart} >Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

export default MealItems;
