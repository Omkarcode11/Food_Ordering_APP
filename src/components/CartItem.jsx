import React, { useContext } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";
import CartContext from "../store/CartContext";

function CartItem({onIncrease,onDecrease, name, quantity, price }) {

    let {addItems,removeItem} = useContext(CartContext)

    function addItemCartHandler(){
        addItems({id})
    }

    function removeItemCartHandler(){
        removeItem(id)
    }

  return (
    <li className='cart-item'>
      <p>
        {name} - {quantity} - {currencyFormatter.format(price)}
      </p>
      <p className='cart-item-actions'>
        <button onClick={onDecrease}>-</button>
        <button>{quantity}</button>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
