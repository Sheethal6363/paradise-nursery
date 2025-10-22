import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Explore our wide range of aromatic and medicinal plants!</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}
