import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart 🛍️</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Add some plants!</p>
          <button
            className="continue-btn"
            onClick={() => navigate("/products")}
          >
            🌱 Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>

                <div className="cart-actions">
                  <button onClick={() => updateQuantity(item.id, +1)}>➕</button>
                  <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <div className="cart-buttons">
              <button
                className="continue-btn"
                onClick={() => navigate("/products")}
              >
                🌿 Continue Shopping
              </button>
              <button
                className="checkout-btn"
                onClick={() => alert("Thank you for your purchase! 🌱")}
              >
                🛒 Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
