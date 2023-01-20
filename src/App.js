import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Items from "./routes/Items";
import About from "./routes/About";
import Layout from "./routes/Layout";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:'/', element:<Home />},
      { path: "/about", element: <About /> },
      { path: "/items", element: <Items /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Footer />

    </CartProvider>
  );
};

export default App;
