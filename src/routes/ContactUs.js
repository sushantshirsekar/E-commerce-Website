import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef, useState, useContext } from "react";
import CartContext from "../store/cart-context";

const ContactUs = () => {
  const confirmPasswordRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ctx = useContext(CartContext);
  const [logInStatus, setLogInStatus] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredMail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value; 
    if(!logInStatus){
      if(enteredPassword !== enteredConfirmPassword){
        return alert("Password and confirm password doesn't match"); 
      }
    }
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
        }else{
          ctx.login(data.idToken,enteredMail);
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
          {logInStatus? "Login" : "SignUp"}
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
            {!logInStatus && <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="text"
                placeholder="Password"
              />
            </Form.Group>}
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="formBasicConfirmPassword">{logInStatus? "Password" : "Confirm Password"}</Form.Label>
              <Form.Control
                ref={confirmPasswordRef}
                type="password"
                placeholder = {logInStatus? "Password" : "Confirm Password"}
                id="formBasicConfirmPassword"
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
