import { BsFillPlayBtnFill } from "react-icons/bs";
import { Button, Table } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-secondary">
        <div
          className="bg-secondary"
          style={{
            color: "white",
            border: "1px solid black",
            width: "200px",
            height: "80px",
            margin: "auto",
          }}
        >
          <p
            className="text-center"
            style={{ fontSize: "1.5rem", fontFamily: "cursive" }}
          >
            Get your Bike with us
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <BsFillPlayBtnFill
            style={{ height: "50px", width: "50px", color: "black" }}
          />
        </div>
      </div>
      <div className="bg-dark m-4 ">
        <h2
          className="text-center pb-3"
          style={{ color: "white", fontFamily: "cursive" }}
        >
          New Updates
        </h2>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td className="text-center pt-3">JUL 16</td>
              <td className="text-center pt-3">Electric Scooter</td>
              <td className="text-center pt-3">Ather 450X</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">
                  {" "}
                  <Link
                    to="https://www.zigwheels.com/newbikes/Ather-Energy/450x" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 19</td>
              <td className="text-center pt-3">
                Electric Scooter with best Specs
              </td>
              <td className="text-center pt-3">OLA S1</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">
                  <Link
                    to="https://www.zigwheels.com/newbikes/Ola-Electric/Ola-S1" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 22</td>
              <td className="text-center pt-3">Electric Scooter</td>
              <td className="text-center pt-3">Vida V1</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">
                  <Link
                    to="https://www.zigwheels.com/newbikes/vida/v1" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 29</td>
              <td className="text-center pt-3">Electric Bike</td>
              <td className="text-center pt-3">Revolt RV400</td>
              <td className="text-center ">
              <Button className="bg-black border-dark">
                  <Link
                    to="https://www.zigwheels.com/newbikes/Revolt-Motors/rv-400" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">AUG 2</td>
              <td className="text-center pt-3">Electri Bike</td>
              <td className="text-center pt-3">Ultraviolette F77</td>
              <td className="text-center ">
              <Button className="bg-black border-dark">
                  <Link
                    to="https://www.zigwheels.com/newbikes/Ultraviolette/f77" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">AUG 7</td>
              <td className="text-center pt-3">Electric Bike</td>
              <td className="text-center pt-3">Oben Rorr</td>
              <td className="text-center ">
              <Button className="bg-black border-dark">
                  <Link
                    to="https://www.zigwheels.com/newbikes/Oben/electric-bike" target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Releases Soon
                  </Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};
export default Home;
