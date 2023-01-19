import React from "react";
import "./App.css";

import Items from "./components/Items";
import Nav from "./components/Nav";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
        <Items />
      
    </React.Fragment>
  );
};

export default App;
