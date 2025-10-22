import React from "react";
import plantsData from "../data/plantsData";
import "./Product.css";

function Products({ addToCart }) {
  return (
    <div className="products-page">
      <h2>Our Beautiful Plants 🌿</h2>
      <div className="product-list">
        {plantsData.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p><b>₹{plant.price}</b></p>
            <button onClick={() => addToCart(plant)}>Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
