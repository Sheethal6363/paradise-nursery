import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLeaf, FaShoppingCart, FaHome, FaSeedling } from "react-icons/fa";
import "./Navbar.css"; // We'll create this file next

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaLeaf className="logo-icon" />
        <Link to="/" className="logo-text">
          Paradise Nursery
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaHome className="nav-icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaSeedling className="nav-icon" /> Plants
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaShoppingCart className="nav-icon" />
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
