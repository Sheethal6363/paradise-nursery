import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add to cart
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        // Update quantity if item already in cart
        return prevCart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
