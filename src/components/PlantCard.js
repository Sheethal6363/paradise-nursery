import React from "react";
import { ShoppingCart } from "lucide-react";
import "./PlantCard.css";

const PlantCard = ({ plant, addToCart }) => {
  return (
    <div className="plant-card">
      <div className="image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
        <div className="price-tag">${plant.price.toFixed(2)}</div>
      </div>

      <div className="plant-details">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
      </div>

      <button className="add-button" onClick={() => addToCart(plant)}>
        <ShoppingCart size={18} style={{ marginRight: "8px" }} />
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;
