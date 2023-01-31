import React, { lazy, Suspense } from "react";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Home from "./routes/Home";
// import Items from "./routes/Items";
// import About from "./routes/About";
import Layout from "./routes/Layout";
import Footer from "./components/Footer";
// import ContactUs from "./routes/ContactUs";
// import Error from "./routes/Error";
// import ItemDetails from "./routes/ItemDetails";

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

const Home = lazy(() => import("../src/routes/Home"));
const Items = lazy(() => import("./routes/Items"));
const About = lazy(() => import("./routes/About"));
const ContactUs = lazy(() => import("./routes/ContactUs"));
const ItemDetails = lazy(() => import("./routes/ItemDetails"));
const Error = lazy(() => import("./routes/Error"));

const App = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                {" "}
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          {ctx.isLoggedIn && (
            <Route
              path="/items"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Items />
                </Suspense>
              }
            />
          )}
          {ctx.isLoggedIn && (
            <Route
              path="/items/:itemId"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ItemDetails />
                </Suspense>
              }
            />
          )}
          {!ctx.isLoggedIn && (
            <Route
              path="/contact"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ContactUs />
                </Suspense>
              }
            />
          )}

          <Route
            path="*"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
