import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef, useState, useContext } from "react";
import CartContext from "../store/cart-context";

const ContactUs = () => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ctx = useContext(CartContext);
  const [logInStatus, setLogInStatus] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredMail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url;
    if (logInStatus) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2aWDHltsNHS2_AoE5WAwW53OyqeItl4g";
        
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2aWDHltsNHS2_AoE5WAwW53OyqeItl4g";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredMail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Registeration Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if(ctx.isLoggedIn){
          console.log(ctx.isLoggedIn);
        }else{
          ctx.login(data.idToken);
        }

      })
      .catch((err) => alert(err.message));
  };
  const switchStatus = () => {
    setLogInStatus((prev) => !prev);
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
            background: "",
          }}
        >
          <Form
            className="mt-3 mb-5 d-block text-center justify-content-center "
            onSubmit={submitHandler}
          >
            {console.log(logInStatus)}
            {!logInStatus && (
              <Form.Group className="mb-3 mt-3 " controlId="formBasicName ">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  ref={nameRef}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
            )}
            {!logInStatus && (
              <Form.Group className="mb-3 mt-3 " controlId="formBasicSurName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  ref={surnameRef}
                  type="text"
                  placeholder="Enter surname "
                  required
                />
              </Form.Group>
            )}
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {logInStatus && (
              <Button variant="dark" className="mb-2" type="submit">
                Log in
              </Button>
            )}
            {!logInStatus && (
              <Button variant="dark" className="mb-2" type="submit">
                Register
              </Button>
            )}
            <br />
            <Button
              onClick={switchStatus}
              className="bg-transparent border-none"
              style={{ color: "blue", border: "none" }}
            >
              {logInStatus ? "Create Account" : "Log into existing Account"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
