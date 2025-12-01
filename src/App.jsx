import React, { useEffect, useState } from "react";
import Navbar from "./componunts/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./componunts/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load cart only when user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }
  }, [isLoggedIn]);

  // Save cart for logged-in user only
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoggedIn]);

  return (
    <div>
      <Navbar
        cart={cart}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCart={setCart}
      />

      <Outlet context={{ cart, setCart, isLoggedIn, setIsLoggedIn }} />

      <Footer />
    </div>
  );
};

export default App;
