import React, { useContext } from 'react'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

function Headers() {
  let  {items} = useContext(CartContext)
  let {showCart} = useContext(UserProgressContext)

  let totalItems = items.reduce((a,b)=>a+b.quantity,0)

  function handleShowCart(){
    showCart()
  }
  return (
    <header id='main-header'>
        <div id='title'>
            <img src='/src/assets/logo.jpg' alt='logo'/>
            <h1>REACTFOOD</h1>
        </div>
        <nav>
          <Button onClick={handleShowCart} textOnly={true} >Cart ({totalItems})</Button>

        {/* <button className='cart-button'>
            Cart (0)
        </button> */}
        </nav>
        
    </header>
  )
}

export default Headers