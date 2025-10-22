import React from "react";
import "./Cart.css";

const Cart = ({ cartItems = [], removeFromCart }) => {
  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🌿</h2>;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart 🛒</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3 className="total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
