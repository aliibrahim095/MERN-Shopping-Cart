import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
// component
import CartItem from "../components/CartItem";

// Actions
import { addToCart } from "../redux/actions/cartActions";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangHandler = (id, qty) => {
    dispatch(addToCart(id,qty));
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            your cart is empty <Link to="/">Go back</Link>
          </div>
        ) : (
          cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangHandler={qtyChangHandler} />)
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
