import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Nav = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-0">
        <Container>
          <Navbar.Brand href="/">Ecommerce-Website</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="bg-secondary " fluid style={{height:'10rem'}} >
        <Row>
          <Col xs={6} className=' mt-5 '>
          <h1 style={{fontSize:'3rem'}}>The Generics</h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Nav;
