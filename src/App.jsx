import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Headers from "./components/Headers";
import Meal from "./components/Meal";
import CartContext, { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
    <Headers/>
    <Meal/>
    <Cart/>
    <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
