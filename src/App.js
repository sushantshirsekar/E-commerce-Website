import React from "react";
import "./App.css";

import Items from "./components/Items";
import Nav from "./components/Nav";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Nav />
        <Items />
      
    </CartProvider>
  );
};

export default App;
