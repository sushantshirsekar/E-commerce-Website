import React, { useEffect, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { Offcanvas, Button, Table, Badge } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { fetchCartData, updateCartData } from "../../store/cart-actions";

const Cart = () => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  
  const cartHandler = () => {
    setShow(true);
  };

  let hasItems; 

  if(cartItems.totalQuantity === 0){
    hasItems = false; 
    console.log(false);
  }else {
    hasItems = true; 
    console.log(true);
  }
  

  const removeCartHandler = () => {
    setShow(false);
  };

  useEffect(()=>{
    dispatch(fetchCartData()); 
    console.log(cartItems.items);
  }, [])

  const addButtonHandler = (data) => {
    dispatch(cartActions.addItem(data)); 
  }

  const removeButtonHandler = (data) => {
    dispatch(cartActions.removeItem(data)); 
  }

  return (
    <React.Fragment>
      <Badge
        variant="secondary"
        className="bg-secondary text-lg d-flex"
        style={{
          cursor: "pointer",
          height: "35px",
          width: "60px",
          color: "black",
        }}
        onClick={cartHandler}
      >
        <BsCartPlusFill
          style={{ height: "25px", width: "50px" }}
        ></BsCartPlusFill>
        <span
          className="pt-1 px-0 fw-bold"
          style={{ fontSize: "1.2rem", margin: "0px" }}
        >
          {cartItems.totalQuantity}
        </span>
      </Badge>
      <Offcanvas
        show={show}
        placement="end"
        onHide={() => {
          setShow(false);
        }}
        style={{ width: "700px", color: "white" }}
        className="bg-dark "
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Cart</Offcanvas.Title>
          <Button
            className="bg-dark border-secondary"
            style={{ height: "auto" }}
            onClick={removeCartHandler}
          >
            X
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Product:</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Add/Remove</th>
              </tr>
            </thead>
            <tbody>
              {console.log(cartItems.items)}
              {cartItems.items.map((item) => {
                
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt="Products"
                        className="rounded mx-auto d-block"
                        style={{ height: "60px", width: "60px" }}
                      />
                    </td>
                    <td className="text-center fw-bold pt-4">{item.title}</td>
                    <td className="text-center pt-4">{item.price}</td>
                    <td className="text-center pt-4">{item.quantity}</td>
                    <td className="text-center ">
                      <Button
                        className="m-1 bg-secondary border-dark"
                        onClick={() => addButtonHandler(item)}
                      >
                        +
                      </Button>
                      <Button
                        className="m-1 bg-dark border-secondary"
                        onClick={() => removeButtonHandler(item)}
                      >
                        −
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="text-center">
                  <h4>Total Amount:</h4>
                </td>
                <td className="text-center">
                  <h4>{cartItems.totalAmount}</h4>
                </td>
                <td className="text-center">
                  <h4>{cartItems.totalQuantity}</h4>
                </td>
                <td>
                  {hasItems && (
                    <Button className="mx-5 bg-secondary border-dark">
                      Proceed to Buy
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default Cart;
