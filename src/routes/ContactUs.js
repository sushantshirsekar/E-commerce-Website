import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

const ContactUs = () => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const res = await fetch(
      "https://e-commerce-db-34fdc-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="bg-dark" style={{ height: "600px" }}>
      <div className="mt-5 ">
        <h1
          className="text-center fw-bold mb-5 "
          style={{ color: "white", fontFamily: "sans-serif" }}
        >
          Contact Us
        </h1>
        <div
          className="bg-white px-5 py-2 "
          style={{
            color: "black",
            width: "500px",
            justifyContent: "center",
            margin: "auto",
            borderRadius: "10px",
            background: ''
          }}
        >
          <Form
            className="mt-3 mb-5 d-block text-center justify-content-center "
            onSubmit={submitHandler}
          >
            <Form.Group className="mb-3 mt-3 " controlId="formBasicName ">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3 " controlId="formBasicSurName">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                ref={surnameRef}
                type="text"
                placeholder="Enter surname "
              />
            </Form.Group>
            <Form.Group
              className="mb-3 justify-content-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="text-lg-center">Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
