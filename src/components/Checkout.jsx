import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../utils/currencyFormatter";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import axios from "axios";
import useSendFetch from "../hooks/useSendFetch";
import Error from "./Error";

function Checkout({ price }) {
  let { sendData, loading, error,data } = useSendFetch();
  let { items ,clear} = useContext(CartContext);
  let { hideCheckout, process } = useContext(UserProgressContext);
  const cartTotal = items.reduce((a, b) => a + b.quantity * b.price, 0);
  function handleClose() {
    hideCheckout();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let data = new FormData(e.target);

    let formData = Object.fromEntries(data.entries());

    let obj = {
      order: {
        items,
        customer: formData,
      },
    };
    sendData("orders", obj);
  }

  function handleFinish(){
    hideCheckout()
    clear()
  }

  if(data && !error.status){
    return <Modal open={process=='checkout'} onClose={handleFinish}>
      <h1>Success!</h1>
      <p>Your order submitted successful</p>
      <p className="modal-actions">
        <Button onClick={handleClose}>Okay</Button>
      </p>
    </Modal>
  }


  return (
    <Modal
      open={process == "checkout"}
      onClose={process == "checkout" ? handleClose : () => {}}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>

        <Input label='Full-Name' type='text' id='name' />
        <Input label='Email-Address' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='Postal-Code' type='text' id='postal-code' />
          <Input label='City' type='text' id='city' />
        </div>

        {error.status && (
          <Error title={"Fail to Order"} message={error.message} />
        )}

        <p className='modal-actions'>
          {loading ? (
            <span>sending order data...</span>
          ) : (
            <>
              <Button type='button' onClick={handleClose} textOnly>
                Close
              </Button>
              <Button>Submit Order</Button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
