import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import ItemDetails from "./ItemDetails";

const Items = () => {
  const ctx = useContext(CartContext);

  return (
    <Container>
      {false && <ItemDetails />}
      <Row className="mt-2 ">
        {ctx.products.map((item) => {
          const addItemToCartHandler = () => {
            return ctx.addItem(item);
          };
          console.log(ctx.items);
          return (
            <Col xs={4} className="mt-4 d-fex justify-content-center ">
              <Card
                variant="top"
                style={{ width: "18rem", color: "white" }}
                className="bg-dark border-light"
              >
                <Link to={`/items/${item.id}`}>
                  <Card.Img src={item.imageUrl} className="border-bottom" />
                </Link>
                <Card.Body>
                  <Card.Title
                    className="text-center fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    <Link
                      to={`/items/${item.id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {item.title}
                    </Link>
                  </Card.Title>
                  <Card.Text className="text-center">
                    <Link
                      to={`/items/${item.id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      ${item.price}
                    </Link>
                  </Card.Text>
                  <Button
                    id={item.id}
                    className="text-center bg-secondary border-dark"
                    style={{ marginLeft: "75px", color: "black" }}
                    onClick={addItemToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Items;
