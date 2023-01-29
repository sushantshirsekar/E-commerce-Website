import { BsFillPlayBtnFill } from "react-icons/bs";
import { Button, Table } from "react-bootstrap";
import React from "react";

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
            Get your Latest Album
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
          Tours
        </h2>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td className="text-center pt-3">JUL 16</td>
              <td className="text-center pt-3">DETROIT, MI</td>
              <td className="text-center pt-3">DTE ENERGY MUSIC THEATRE</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 19</td>
              <td className="text-center pt-3">TORONTO,ON, MI</td>
              <td className="text-center pt-3">BUDWEISER STAGE</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 22</td>
              <td className="text-center pt-3">BRISTOW, VA</td>
              <td className="text-center pt-3">JIGGY LUBE LIVE</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">JUL 29</td>
              <td className="text-center pt-3">PHOENIX, AZ</td>
              <td className="text-center pt-3">AK-CHIN PAVILION</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">AUG 2</td>
              <td className="text-center pt-3">LAS VEGAS, NV</td>
              <td className="text-center pt-3">T-MOBILE ARENA</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center pt-3">AUG 7</td>
              <td className="text-center pt-3">CONCORD, CA</td>
              <td className="text-center pt-3">CONCORD PAVILION</td>
              <td className="text-center ">
                <Button className="bg-black border-dark">Buy Tickets</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};
export default Home;
