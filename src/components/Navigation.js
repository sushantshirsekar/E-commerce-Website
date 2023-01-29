import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { BsFillInfoSquareFill, BsFillBagFill, BsHouseDoorFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

import Cart from "./Cart/Cart";
const Navigation = () => {
  const ctx = useContext(CartContext); 
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-0">
        <Container className="d-flex justify-content-center pr-5">
          <NavbarBrand>
            <Nav className="px-5 justify-content-center">
              <Nav.Item className="mx-4">
                <NavLink className={classes["nav__header"]} to="/">
                  <BsHouseDoorFill />
                </NavLink>
              </Nav.Item>
              {ctx.isLoggedIn && <Nav.Item className="mx-4">
                <NavLink className={classes["nav__header"]} to="/items">
                  <BsFillBagFill />
                </NavLink>
              </Nav.Item>}
              <Nav.Item className="mx-4">
                <NavLink className={classes["nav__header"]} to="/about">
                  <BsFillInfoSquareFill />
                </NavLink>
              </Nav.Item>
              {!ctx.isLoggedIn && <Nav.Item className="mx-4">
                <NavLink className={classes["nav__header"]} to="/contact">
                  <FaUser />
                </NavLink>
              </Nav.Item>}
            </Nav>
          </NavbarBrand>

          <Navbar.Collapse className="justify-content-end ">
            {ctx.isLoggedIn && <Navbar.Text className="mx-2">
              <Cart />
            </Navbar.Text>}
            {ctx.isLoggedIn && <Navbar.Text>
              <Button variant="secondary fw-bold text-dark" onClick={ctx.logout}>Log Out</Button>
              </Navbar.Text>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="bg-secondary text-center" style={{ height: "6rem" }}>
        <Container style={{ width: "20rem" }}>
          <NavbarBrand
            style={{ fontSize: "3rem", fontFamily: "cursive" }}
            className="fw-bold"
          >
            The Generics
          </NavbarBrand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
