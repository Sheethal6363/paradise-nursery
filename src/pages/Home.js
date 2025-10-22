import React from "react";
import { Leaf, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="logo">
          <Leaf className="logo-icon" /> Paradise Nursery
        </h1>
        <p className="tagline">Bringing Nature Closer to You 🌿</p>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Freshen up your home with green vibes</h2>
          <p>
            Explore our curated collection of indoor plants — aromatic, air-purifying,
            and beautiful. Perfect for your living space or as a thoughtful gift!
          </p>
          <Link to="/products">
            <button className="explore-btn">
              <ShoppingBag size={18} style={{ marginRight: "8px" }} />
              Shop Now
            </button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="plants"
          />
        </div>
      </section>

      <footer className="home-footer">
        <p>🌱 Paradise Nursery — Nurturing Nature Since 2025 🌼</p>
      </footer>
    </div>
  );
};

export default Home;
