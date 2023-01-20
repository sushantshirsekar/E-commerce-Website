import React from "react";
import { NavLink} from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import Cart from "./Cart/Cart";
const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-0">
        <Container className="d-flex justify-content-center pr-5">
          <NavbarBrand>
            <Nav className="px-5 justify-content-center">
              <Nav.Item className="mx-4">
                <NavLink style={{textDecoration:'none', color:'white'}} to='/'>Home</NavLink>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <NavLink style={{textDecoration:'none', color:'white'}} to='/items'>Store</NavLink>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <NavLink style={{textDecoration:'none', color:'white'}} to='/about'>About</NavLink>
              </Nav.Item>
            </Nav>
          </NavbarBrand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Cart />
            </Navbar.Text>
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
