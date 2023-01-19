import React from "react";
import { Modal, Button, Container, Row, Col, Stack } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartHandlerInCart = () => {
    return props.onCart(false);
    console.log(props.onCart);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            {console.log(ctx.items)}
            {ctx.items.map((item) => {
              return (
                <Stack gap={4}>
                    <div>
                        <img src={item.imageUrl} style={{height:'50px', width:'50px'}}/>
                        <span className="d-flex justify-content-center">{item.title}</span>
                        <span className="d-flex justify-content-end">{item.price}</span>
                    </div>
                </Stack>
              );
            })}
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={cartHandlerInCart}>
            Close
          </Button>
          <Button variant="primary">Place Order</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Cart;
