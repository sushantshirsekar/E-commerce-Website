// import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      {props.children}
    </Fragment>
  );
};
export default Layout;
