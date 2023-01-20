import React from "react";
import { Card, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="bg-secondary mt-5">
      <Card.Body>
        <Container>
        <Card.Title style={{fontSize:'3rem', color:'black',fontFamily: "cursive"}}>The Generics</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Footer;
