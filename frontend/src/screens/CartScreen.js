import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
// component
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
      return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
  }

  const getCartSubTotal=() => {
      return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0)
  }
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            your cart is empty <Link to="/">Go back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangHandler={qtyChangHandler}
              removeHandler = {removeHandler} 
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
