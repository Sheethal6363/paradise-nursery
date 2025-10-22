import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}

      <h3>Total: ${total}</h3>
      <div className="cart-buttons">
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => alert("Checkout feature coming soon!")}>
          Checkout
        </button>
      </div>
    </div>
  );
}
