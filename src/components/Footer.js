import React from "react";
import { Card, Container } from "react-bootstrap";
import { BsFacebook ,BsInstagram, BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Card className="bg-secondary mt-5">
      <Card.Body>
        <div className="d-flex">
          <Container>
            <Card.Title
              style={{
                fontSize: "3rem",
                color: "black",
                fontFamily: "cursive",
              }}
            >
              The Generics
            </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Container>
          <Card.Text>
            <Link to="https://github.com/sushantshirsekar" target="_blank">
              <BsGithub style={{ height: "30px", width: "30px" , color:'black'}} className="mx-1" />
            </Link>
          </Card.Text>
          <Card.Text>
            <Link to="https://www.facebook.com/sushant.shirsekar.5" target="_blank">
              <BsFacebook style={{ height: "30px", width: "30px" , color:'black'}} className="mx-1"/>
            </Link>
          </Card.Text>
          <Card.Text>
            <Link to="https://instagram.com/sushant_shirsekar_?igshid=ZmZhODViOGI=" target="_blank">
              <BsInstagram style={{ height: "30px", width: "30px", color:'black' }} className="mx-1"/>
            </Link>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Footer;
