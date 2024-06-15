import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItems: () => {},
  removeItem: () => {},
  clear:()=>{},
});

function cartReducer(state, action) {
  if (action.type == "ADD") {
    
    const existItems = state.items.findIndex(
      (item) => item.id == action.item.id
    );
    const updatedItems = [ ...state.items ];
    if (existItems > -1) {
      const existItem = state.items[existItems];
      const updatedI = {
        ...existItem,
        quantity: existItem.quantity++,
      };

      updatedItems[existItems] = updatedI;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };

  } else if (action.type == "REMOVE") {
    
    const existItems = state.items.findIndex(
      (item) => item.id == action.id
    );

    const existingCartItem = state.items[existItems];
    const updateItems = [...state.items];

    if (existingCartItem.quantity == 1) {
      updateItems.splice(existingCartItem, 1);
    } else {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updateItems[existItems] = updateItem;
    }

    return { ...state, items: updateItems };
  }else if(action.type=="CLEAR"){ 
    state.items.length = 0
  }
  return state;
}

export function CartContextProvider({ children }) {
  let [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cart.items,
    addItems,
    removeItem,
    clear,
  };

  function addItems(item) {
    dispatch({ type: "ADD", item });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE", id });
  }

  function clear() {
    dispatch({type: "CLEAR"});
  }
   
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
