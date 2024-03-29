import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import ItemDetails from "./ItemDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../store/cart-actions";
import { cartActions } from "../store/cart-slice";

const Items = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);
  const DUMMY_DATA = useSelector((state) => state.admin.itemList);

  const addItemToCartHandler = (data) => {
    dispatch(cartActions.addItem(data));
  };

  return (
    <Container>
      {console.log(cartData.items)}
      {false && <ItemDetails itemList={DUMMY_DATA} />}
      <Row className="mt-2">
        {DUMMY_DATA.map((item) => {
          return (
            <Col
              xs={4}
              className="mt-4 d-fex justify-content-center "
              key={item.id}
            >
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
                      ₹ {item.price}
                    </Link>
                  </Card.Text>
                  <Button
                    id={item.id}
                    className="text-center bg-secondary border-dark"
                    style={{ marginLeft: "75px", color: "black" }}
                    onClick={() => addItemToCartHandler(item)}
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
