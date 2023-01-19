import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";

import { useContext } from "react";
import CartContext from "../store/cart-context";

import Cart from "../components/Cart/Cart";

const Nav = () => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartHandler = () => {
    setShow(true);
    console.log(show);
  }
  const removeCartHandler = () => {
    setShow(false);
    console.log(show);
  }

  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-0">
        <Container>
          <Navbar.Brand href="/">Ecommerce-Website</Navbar.Brand>
          <Button className="bg-secondary border-dark" onClick={cartHandler}>
            Cart
          </Button>
          {show &&<Cart onCart={removeCartHandler}/>}
        </Container>
      </Navbar>
      <Navbar className="bg-secondary text-center" style={{ height: "10rem" }}>
        <Container style={{ width: "20rem" }}>
          <Navbar.Brand style={{ fontSize: "3rem" }} className="">
            The Generics
          </Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Nav;
