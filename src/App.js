import React, { lazy, Suspense, useDebugValue, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Home from "./routes/Home";
// import Items from "./routes/Items";
// import About from "./routes/About";
import Layout from "./routes/Layout";
import Footer from "./components/Footer";
import Admin from "./routes/Admin";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "./store/admin-slice";
import { fetchCartData, updateCartData } from "./store/cart-actions";
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

let init = false; 

const App = () => {
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const isLogin = useSelector((state)=> state.cart.loggedIn); 
  const cartData = useSelector((state)=> state.cart.items); 

  const dispatch = useDispatch(); 

  useEffect(()=> {
    if(!init){
      init = true; 
      return; 
    }else{
      dispatch(updateCartData(cartData));
    }

  }, [cartData])
  

  useEffect(()=> {
    fetch(
      "https://e-commerce-db-34178-default-rtdb.firebaseio.com/adminData.json"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        dispatch(adminActions.replaceList(data));
      });

    if(isLogin){
      dispatch(fetchCartData());
      console.log("reload app");
    }
  }, [dispatch])

  return (
    <>
      {isAdmin && <Admin />}
      {!isAdmin && (
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

            {isLogin && <Route
              path="/items"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Items />
                </Suspense>
              }
            />}

            {isLogin && <Route
              path="/items/:itemId"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ItemDetails />
                </Suspense>
              }
            />}

            {!isLogin && <Route
              path="/contact"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ContactUs />
                </Suspense>
              }
            />}

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
      )}
      {!isAdmin && <Footer />}
    </>
  );
};

export default App;
