import React from "react";
import PlantCard from "../components/PlantCard";

export default function Products({ addToCart }) {
    
  const aromaticPlants = [
    {
      id: 1,
      name: "Lavender",
      price: 15,
      description: "A soothing aromatic herb.",
      image: "https://www.thespruce.com/thmb/5Csl-NBuyUJRh3gW7H8LQPJOkbA=/5501x3668/filters:no_upscale():max_bytes(150000):strip_icc()/english-lavender-plants-2130856-hero-f5ac2b165e594de59ec389ad46a052b8.jpg"},
    {
      id: 2,
      name: "Jasmine",
      price: 18,
      description: "Beautiful fragrance and white blooms.",
      image: "https://www.petalrepublic.com/wp-content/uploads/2021/04/Ultimate-Guide-to-Jasmine-Flower-Meaning-Types-and-Uses.jpeg",
    },
  ];

  const medicinalPlants = [
    {
      id: 3,
      name: "Aloe Vera",
      price: 20,
      description: "Heals burns and improves skin.",
      image: "https://assets-news.housing.com/news/wp-content/uploads/2022/12/25072303/image2-24.jpg",
    },
    {
      id: 4,
      name: "Tulsi (Holy Basil)",
      price: 12,
      description: "Boosts immunity and reduces stress.",
      image: "https://thumbs.dreamstime.com/b/vertical-shot-f-holy-basil-plant-growing-garden-262497009.jpg",
    },
  ];

  return (
    <div className="products">
      <h2>Aromatic Plants</h2>
      <div className="product-grid">
        {aromaticPlants.map((p) => (
          <PlantCard key={p.id} plant={p} addToCart={addToCart} />
        ))}
      </div>

      <h2>Medicinal Plants</h2>
      <div className="product-grid">
        {medicinalPlants.map((p) => (
          <PlantCard key={p.id} plant={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
