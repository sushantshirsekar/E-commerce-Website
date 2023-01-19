import React from "react";
import { Button, Card, Container,Row, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Items = () => {
  const ctx = useContext(CartContext);

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];
  return (
    <Container>
      <Row className="mt-2 ">
        {productsArr.map((item) => {
          
          const addItemToCartHandler = ()=> { 
            return ctx.addItem(item)
          };
          console.log(ctx.items);
          return (
            
            <Col xs={4} className="mt-4 d-fex justify-content-center ">
              <Card
                variant="top"
                style={{ width: "18rem", color: "white" }}
                className="bg-dark border-light"
              >
                <Card.Img src={item.imageUrl} className="border-bottom" />
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-center">${item.price}</Card.Text>
                  <Button id={item.id}
                    className="text-center bg-secondary border-dark"
                    style={{ marginLeft: "75px" , color: 'black'}}
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
