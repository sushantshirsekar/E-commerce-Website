import React from "react";
import "./App.css";

import Items from "./components/Items";
import Navigation from "./components/Navigation";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider >
      <Navigation />
        <Items />
      
    </CartProvider>
  );
};

export default App;
