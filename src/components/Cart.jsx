import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/currencyFormatter'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

function Cart() {
  let {items,addItems,removeItem} = useContext(CartContext)
  let  {process,hideCart,showCheckout} = useContext(UserProgressContext)
  const cartTotal = items.reduce((a,b)=>a+b.quantity*b.price,0)

  function handleHideCart(){
     hideCart()
  }

  function handleShowCheckout(){
   showCheckout()
  }

  return (
    <Modal className='cart' open={process=="cart"} onClose={process=='cart'?handleHideCart:()=>{}}>
        <h2>Your Cart</h2>
        {
          items.map((item)=><CartItem key={item.id} onIncrease={()=>addItems(item)} onDecrease={()=>removeItem(item.id)} name={item.name} quantity={item.quantity} price={item.price} />)
        }
        <p className='cart-total'>
           {currencyFormatter.format(cartTotal)}
        </p>

        <p className='modal-actions'>
          <Button  textOnly  onClick={handleHideCart}> Close</Button>
          {items.length ?
          <Button onClick={handleShowCheckout}> Go to Checkout </Button>:''
          }
        </p>
    </Modal>
  )
}

export default Cart