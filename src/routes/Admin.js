import React, { useEffect,  useRef } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminActions } from "../store/admin-slice";

const Admin = () => {
  const titleRef = useRef("");
  const nav = useNavigate();
  const idRef = useRef("");
  const descriptionRef = useRef("");
  const urlRef = useRef("");
  const priceRef = useRef(0);
  const list = useSelector((state) => state.admin.itemList) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://e-commerce-db-34178-default-rtdb.firebaseio.com/adminData.json"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        dispatch(adminActions.replaceList(data));
      });
  }, [dispatch]);

  useEffect(() => {
    fetch(
      "https://e-commerce-db-34178-default-rtdb.firebaseio.com/adminData.json",
      {
        method: "PUT",
        body: JSON.stringify({
          ...list,
        }),
      }
    );
  }, [list]);

  const adminSubmitHandler = (e) => {
    e.preventDefault();
    if (
      titleRef.current.value === "" ||
      idRef.current.value === "" ||
      descriptionRef.current.value === "" ||
      urlRef.current.value === "" ||
      priceRef.current.value === ""
    ) {
      alert("Admin sahab sab values fill karo");
    }
    console.log(idRef.current.value);
    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    const listdata = {
      id: idRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      imageUrl: urlRef.current.value,
      quantity: 1,
      description: descriptionRef.current.value,
    };
    console.log(list);
    dispatch(adminActions.addToList(listdata));
    let listOfData = [{ ...listdata }, ...list];
    fetch(
      "https://e-commerce-db-34178-default-rtdb.firebaseio.com/adminData.json",
      {
        method: "PUT",
        body: JSON.stringify({
          ...listOfData,
        }),
      }
    );
    titleRef.current.value = ""; 
    idRef.current.value = ""; 
    descriptionRef.current.value = "";
    priceRef.current.value = ""; 
    urlRef.current.value = ""; 
  };
  const deleteHandlerAdmin = (id) => {
    dispatch(adminActions.deleteListItem(id));
  };
  const logoutHandler = () => {
    dispatch(adminActions.adminLogout());
    localStorage.setItem("isAdmin", false);
    nav("/"); 
  };
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="d-flex justify-content-center">
          <h1
            className="text-center fw-bold mb-5 mt-5"
            style={{ color: "black", fontFamily: "sans-serif" }}
          >
            Admin
          </h1>
          <Button
            className="bg-secondary border-dark"
            style={{ position: "absolute", left: "1200px", top: "50px" }}
            onClick={logoutHandler}
          >
            Log Out
          </Button>
        </div>
        <div
          className="bg-white px-5 py-2 "
          style={{
            color: "black",
            width: "500px",
            justifyContent: "center",
            margin: "auto",
            borderRadius: "10px",
            background: "",
          }}
        >
          <Form
            className="mt-3 mb-5 d-block text-center justify-content-center "
            onSubmit={adminSubmitHandler}
          >
            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicID"
            >
              <Form.Label className="text-lg-center">ID</Form.Label>
              <Form.Control type="number" placeholder="Enter ID" ref={idRef} />
            </Form.Group>

            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="text-lg-center">Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                ref={titleRef}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicDescription"
            >
              <Form.Label className="text-lg-center">
                Product Description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                ref={descriptionRef}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicPrice"
            >
              <Form.Label className="text-lg-center">Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                ref={priceRef}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicURL"
            >
              <Form.Label className="text-lg-center">
                Product Image URL
              </Form.Label>
              <Form.Control
                ref={urlRef}
                type="text"
                placeholder="If image in files, upload to G:DRIVE and paste link"
              />
            </Form.Group>

            <Button variant="dark" className="mb-2" type="submit">
              Add Item
            </Button>

            <br />
          </Form>
        </div>
      </div>
      <div
        className="d-flex justify-content-center mt-5 mb-0 bg-white"
        style={{ marginBottom: "0px" }}
      >
        <h1 style={{ color: "black" }}>List Of Products</h1>
      </div>
      <div className="bg-white">
        <Row className="mt-2 m-2">
          {console.log(list)}
          {list.map((item) => {
            return (
              <Col
                xs={4}
                className="mt-4 d-fex justify-content-center "
                key={item.id}
              >
                <Card
                  variant="top"
                  style={{ width: "18rem", color: "black" }}
                  className="bg-white border-dark"
                >
                  
                    <Card.Img src={item.imageUrl} className="border-bottom" />
                  
                  <Card.Body>
                    <Card.Title
                      className="text-center fw-bold"
                      style={{ textDecoration: "none" }}
                    >
                      
                        {item.title}
                      
                    </Card.Title>
                    <Card.Text className="text-center">
                      
                        ₹ {item.price}
                      
                    </Card.Text>
                    <Button
                      id={item.id}
                      className="text-center bg-danger border-danger"
                      style={{ marginLeft: "95px", color: "black" }}
                      onClick={() => deleteHandlerAdmin(item.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Admin;
