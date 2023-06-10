import React from "react";
import Footer from "./components/common/Footer.js";
import Nav from "./components/common/Nav.js";
import "./assets/Style/layout.css"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet  />
      <Footer  />

    </div>
  );
};

export default Layout;