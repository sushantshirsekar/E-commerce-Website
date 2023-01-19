import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import Cart from "./Cart/Cart";
const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-0">
        <Container className="d-flex justify-content-center pr-5">
          <Navbar.Brand href="/" >
            <Nav className="px-5 justify-content-center">
              <Nav.Item className="mx-4">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Nav.Link href="#home">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Nav.Link href="#home">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Cart />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="bg-secondary text-center" style={{ height: "10rem" }}>
        <Container style={{ width: "20rem" }}>
          <Navbar.Brand
            style={{ fontSize: "3rem", fontFamily: "cursive" }}
            className="fw-bold"
          >
            The Generics
          </Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
