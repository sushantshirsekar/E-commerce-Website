import React from "react";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Items from "./routes/Items";
import About from "./routes/About";
import Layout from "./routes/Layout";
import Footer from "./components/Footer";
import ContactUs from "./routes/ContactUs";
import Error from "./routes/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/items", element: <Items /> },
//       { path: "/contact", element: <ContactUs /> },
//       { path: "/items/:itemId", element: <ItemDetails /> },
//     ],
//   },
// ]);

const App = () => {
  const ctx = useContext(CartContext); 

  return (
    <>
    {console.log(ctx.isLoggedIn)}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          {ctx.isLoggedIn && <Route path="/items" element={<Items />} />}
          {!ctx.isLoggedIn && <Route path="/contact" element={<ContactUs />} />}
          <Route path="*" element={<Error />}/>
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
