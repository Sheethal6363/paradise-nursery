import React from "react";

export default function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />
      <div>
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <div>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span> {item.quantity} </span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Delete</button>
      </div>
    </div>
  );
}
